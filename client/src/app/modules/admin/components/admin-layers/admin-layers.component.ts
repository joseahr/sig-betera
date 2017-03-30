import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';
import { DataTableDirective } from 'angular-datatables';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

declare const $;

@Component({
  selector: 'app-admin-layers',
  templateUrl: './admin-layers.component.html',
  styleUrls: ['./admin-layers.component.css'],
  providers : [AdminService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminLayersComponent implements OnInit {

  dtOptionsLayers;
  dtOptionsBase;

  @ViewChildren(DataTableDirective) 
  private dtElements;

  constructor(
    private adminService : AdminService,
    private snackbar : MdSnackBar,
    private location : Location,
    private router : Router, 
    private route : ActivatedRoute
  ) {
    this.dtOptionsLayers = {
      scrollX : true,
      scrollY : '50vh',
      scrollCollapse: true,
      ajax: 'api/admin/layers',
      columns: [
        {
          title : 'Eliminar',
          defaultContent : `
          <button md-button class="mat-button remove-layer">
            <md-icon style="color : #ff0000" class="material-icons mat-icon">remove_circle_outline</md-icon>
          </button>`
        },
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
        { title: 'OID', data: 'oid' },
      ]
    };
    this.dtOptionsBase = {
      scrollX : true,
      scrollY : '50vh',
      scrollCollapse: true,
      ajax: 'api/admin/baselayers',
      columns: [
        {
          title : 'Eliminar',
          defaultContent : `
          <button md-button class="mat-button remove-baselayer">
            <md-icon style="color : #ff0000" class="material-icons mat-icon">remove_circle_outline</md-icon>
          </button>`
        },
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
        { title: 'URL', data: 'service_url' },
      ]
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    //console.log('dtElements', this.dtElements);
    let self = this;
    this.dtElements._results[0].dtInstance.then(dtInstance =>{
      dtInstance.on('click', '.remove-layer', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.adminService.deleteLayer(row.name).subscribe(
          ()=>{
            console.log('deleted');
            dtInstance.ajax.reload();
            self.snackbar.open(`Capa ${row.name} eliminada correctamente`, 'CERRAR', {
              duration : 2000
            });
          }
        )
      });
    });
    this.dtElements._results[1].dtInstance.then(dtInstance =>{
      dtInstance.on('click', '.remove-baselayer', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.adminService.deleteBaseLayer(row.id).subscribe(
          ()=>{
            console.log('deleted baselayer')
            dtInstance.ajax.reload();
            self.snackbar.open(`Capa Base ${row.id} eliminada correctamente`, 'CERRAR', {
              duration : 2000
            });
          }
        )
      });
    });
  }

  goToCreateLayerPage(){
    this.router.navigate(['./new', 'layer'], { relativeTo : this.route })
  }

  goToCreateBaseLayerPage(){
    this.router.navigate(['./new', 'baselayer'], { relativeTo : this.route })
  }

}
