import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.transitions';

import { AdminService } from '../../services/admin.service';

import { DataTableDirective } from 'angular-datatables';

declare const $;

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
  dtOptions;
  
  dtInstance;

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  constructor(private adminService : AdminService, private zone : NgZone) {
    /*this.adminService.getUsers().subscribe(
      (res) => {
        this.users = res.json();
      }
    )*/
    this.dtOptions = {
      ajax: 'api/admin/users',
      columns: [{
        title : 'Editar',
        defaultContent : `
        <button md-button class="mat-button edit-user">
          <md-icon class="material-icons mat-icon">add</md-icon>
        </button>`
      },
      {
        title: 'ID',
        data: 'id'
      }, {
        title: 'Nombre',
        data: 'name'
      }, {
        title: 'Email',
        data: 'email'
      }, {
        title: 'Rol',
        data: 'rol'     
      }]
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.datatableElement.dtInstance.then(dtInstance =>{
      dtInstance.on('click', '#edit-user', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();

      })
    });
  }

}
