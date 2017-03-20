import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  allGroups;

  constructor(
    private route : ActivatedRoute, 
    private location : Location,
    private adminService : AdminService
  ) {
    //console.log(this.route.snapshot.params, 'snapshot');
    let params : any = this.route.snapshot.params;
    this.userDetail = this.adminService.getUserDetail(params.id).map(res => res.json());
    this.allGroups = this.adminService.getAllGroups().map(res => res.json());
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
