import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { AdminUserDetailsComponent } from '../';

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

  constructor(
    private adminService : AdminService, 
    private zone : NgZone,
    private router : Router,
  ) {
    this.dtOptions = {
      scrollX : true,
      scrollY : '60vh',
      scrollCollapse: true,
      dom : 'frtlip',
      language : {
        "lengthMenu":     "_MENU_",
        "search":         "",
        "searchPlaceholder": "Search...",
      },
      ajax  : {
        url : 'api/admin/users',
        dataSrc : ''
      },
      columns: [{
        title : 'Editar',
        defaultContent : `
        <button md-button class="mat-button edit-user">
          <md-icon style="color : #ffbb00" class="material-icons mat-icon">mode_edit</md-icon>
        </button>`
      },
      { title: 'ID', data: 'id'}, 
      { title: 'Nombre', data: 'name' }, 
      { title: 'Email', data: 'email' },
      { title: 'Rol', data: 'rol' }, 
      { title: 'Válido', data: 'valid' }
      ]
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let self = this;
    this.datatableElement.dtInstance.then(dtInstance =>{
      (<any>dtInstance).on('click', '.edit-user', function(){
        let row_dom = $(this).closest('tr');
        let row : any = dtInstance.row(row_dom).data();
        self.router.navigate([`admin/users/`, `${row.id}`]);
      });
    });
  }

}
