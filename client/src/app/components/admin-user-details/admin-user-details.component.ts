import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.css'],
})
export class AdminUserDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private location : Location) {
    this.route.queryParams.subscribe(
      (data : any) => {
        console.log(data);
        let user = JSON.parse(data.user);
        this.location.replaceState(`/admin/users/${user.id}`);
      }
    );
  }

  ngOnInit() {
  }

}
