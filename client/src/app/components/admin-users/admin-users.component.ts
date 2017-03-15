import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.transitions';

import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  providers : [AdminService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminUsersComponent implements OnInit {

  users;

  constructor(private adminService : AdminService) {
    this.adminService.getUsers().subscribe(
      (res) => {
        this.users = res.json();
      }
    )
  }

  ngOnInit() {
  }

}
