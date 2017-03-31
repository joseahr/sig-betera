import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css'],
  providers : [AdminService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminUserDetailsComponent implements OnInit {

  userDetail;
  allNotUserGroups;
  selectedGroupToAdd;
  selectedMapToAdd;

  constructor(
    private route : ActivatedRoute, 
    private location : Location,
    private adminService : AdminService
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  getData(){
    let params : any = this.route.snapshot.params;
    Observable.forkJoin(
      this.adminService.getUserDetail(params.id).map(res => res.json() ),
      this.adminService.getAllGroups().map( res => res.json() )
    ).map( data => {
      let userDetail = data[0];
      userDetail.not_assigned_maps = userDetail.not_assigned_maps || [];
      userDetail.maps = userDetail.maps || [];
      let userGroups = userDetail.grupos || [];
      let allGroups  = data[1] || [];
      return [userDetail, allGroups.filter( g => !userGroups.find( gg => g.id == gg.id ) )];
    }).subscribe(
      (data)=>{
        this.userDetail = data[0];
        this.allNotUserGroups = data[1];
      }
    );
  }

  addGroup(){
    let params : any = this.route.snapshot.params;
    this.adminService.addUserGroup(params.id, this.selectedGroupToAdd).subscribe(
      ()=>{
        this.getData();
      }
    )
  }

  deleteGroup(groupName){
    let params : any = this.route.snapshot.params;
    this.adminService.deleteUserGroup(params.id, groupName).subscribe(
      ()=>{
        this.getData();
      }
    )
  }

  addUserMap(){
    let params : any = this.route.snapshot.params;
    this.adminService.addUserMap(params.id, this.selectedMapToAdd).subscribe(
      ()=>{
        //let map = this.userDetail.not_assigned_maps.find( m => m.id == this.selectedMapToAdd );
        //console.log(map, 'map');
        //this.userDetail.maps.push(map);
        //this.userDetail.not_assigned_maps = this.userDetail.not_assigned_maps.filter( m => m.id != this.selectedMapToAdd );
        //console.log(map, 'map');
        //this.selectedMapToAdd = null;
        this.getData();
      }
    );
  }

  deleteUserMap(map){
    //console.log(map);
    let params : any = this.route.snapshot.params;
    this.adminService.deleteUserMap(params.id, map.id).subscribe(
      ()=>{
        //this.userDetail.not_assigned_maps.push(map);
        //this.userDetail.maps = this.userDetail.maps.filter( m => m.id != map.id );
        this.getData();
      }
    );

  }

  changeRolOfLayer(event, layer){
    console.log(event, layer);
    let params : any = this.route.snapshot.params;
    let id_user  = params.id;
    let oldValue = layer.rol;
    let newValue = event.value;
    let query : Observable<any> = null;
    if(oldValue == 'r'){
      /* Ejecutamos un insert PUT */
      query = this.adminService.insertUserRol(id_user, layer.id_layer, newValue);
    } else if(newValue == 'r'){
      /* Ejecutamos un delete */
      query = this.adminService.deleteUserRol(id_user, layer.id_layer);
    } else {
      /* Ejecutamos un Update */
      query = this.adminService.updateUserRol(id_user, layer.id_layer, newValue);
    }
  
    query.subscribe(
      ()=>{
        layer.rol = newValue;
        console.log('Actualizado correctamente');
      }
    );
  
  }

}
