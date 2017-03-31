import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-maps-new-default-map',
  templateUrl: './admin-maps-new-default-map.component.html',
  styleUrls: ['./admin-maps-new-default-map.component.css'],
  providers : [AdminService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMapsNewDefaultMapComponent implements OnInit {

  selectedMap;
  allMapsNotDefault;

  constructor(
    private snackbar : MdSnackBar,
    private adminService : AdminService, 
    private location : Location
  ) {
    this.allMapsNotDefault = Observable.forkJoin(
      this.adminService.getAllMaps().map( res => res.json() ),
      this.adminService.getAllDefaultMaps().map(res => res.json() )
    ).map(maps =>{
      let allMaps = maps[0] || [];
      let defultMaps = maps[1] || [];
      return allMaps.filter( map => !defultMaps.find( dmap => map.id == dmap.id ) );
    })  

    /*this.allMapsNotDefault.subscribe(
      (data)=>{
        console.log('data', data)
      }
    )*/
  }

  ngOnInit() {}

  createDefaultMap(){
    this.adminService.createDefaultMap(this.selectedMap).subscribe(
      ()=>{
        this.location.back();
      },
      (err)=>{
        this.snackbar.open(`Error : ${err.json()}`, 'CERRAR', {
          duration : 2000
        })
      }
    );
  }

}
