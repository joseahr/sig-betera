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

  constructor(
    private route : ActivatedRoute, 
    private location : Location,
    private adminService : AdminService
  ) {
    let params : any = this.route.snapshot.params;

    this.allNotUserGroups = Observable.forkJoin(
      this.adminService.getUserDetail(params.id).map(res => res.json() ),
      this.adminService.getAllGroups().map( res => res.json() )
    ).map( groups => {
      let userDetail = this.userDetail = groups[0];
      let userGroups = userDetail.grupos || [];
      let allGroups  = groups[1] || [];
      return allGroups.filter( g => !userGroups.includes(g) );
    });

  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  changeGroup(event){
    console.log(event);
  }

}
