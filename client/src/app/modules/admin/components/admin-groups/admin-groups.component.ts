import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

declare const $;

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.css'],
  providers : [AdminService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminGroupsComponent implements OnInit {
  
  dtOptions;
  dtInstance;
  newGroupName;

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  constructor(private adminService : AdminService) {
    this.dtOptions = {
      scrollX : true,
      scrollY : '50vh',
      scrollCollapse: true,
      ajax  : {
        url : 'api/admin/groups',
        dataSrc : ''
      },
      columns: [
        {
          title : 'Eliminar',
          defaultContent : `
          <button md-button class="mat-button remove-group">
            <md-icon style="color : #ff0000" class="material-icons mat-icon">remove_circle_outline</md-icon>
          </button>`
        },
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
      ]
    };
  }

  ngOnInit() {}

  ngAfterViewInit(){
    let self = this;
    this.datatableElement.dtInstance.then(dtInstance =>{
      this.dtInstance = dtInstance;
      dtInstance.on('click', '.remove-group', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.adminService.deleteGroup(row.id).subscribe(
          ()=>{
            dtInstance.ajax.reload();
          }
        )
      });
    });
  }

  createGroup(){
    this.adminService.createGroup(this.newGroupName).subscribe(
      ()=>{
        this.dtInstance.ajax.reload();
        this.newGroupName = null;
      }
    )
  }

}