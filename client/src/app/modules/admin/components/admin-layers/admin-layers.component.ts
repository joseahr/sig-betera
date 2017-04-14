import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MdSnackBar, MdDialog } from '@angular/material';
import { DataTableDirective } from 'angular-datatables';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { AdminLayerEditComponent } from '../';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';
import { ConfirmDialogService } from '../../../../services';

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
  dtInstances = [];

  @ViewChildren(DataTableDirective) 
  private dtElements;

  constructor(
    private confirm : ConfirmDialogService,
    private loading : LoadingAnimateService,
    private adminService : AdminService,
    private dialogRef : MdDialog,
    private snackbar : MdSnackBar,
    private location : Location,
    private router : Router, 
    private route : ActivatedRoute
  ) {
    
    this.dtOptionsLayers = {
      scrollX : true,
      scrollY : '50vh',
      scrollCollapse: true,
      dom : 'frtlip',
      language : {
        "lengthMenu":     "_MENU_",
        "search":         "",
        "searchPlaceholder": "Search...",
      },
      ajax  : {
        url : 'api/admin/layers',
        dataSrc : ''
      },
      columns: [
        {
          title : 'Editar',
          defaultContent : `
          <button md-button class="mat-button edit-layer">
            <md-icon style="color : #ffbb00" class="material-icons mat-icon">mode_edit</md-icon>
          </button>`
        },
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
      dom : 'frtlip',
      language : {
        "lengthMenu":     "_MENU_",
        "search":         "",
        "searchPlaceholder": "Search...",
      },
      ajax  : {
        url : 'api/admin/baselayers',
        dataSrc : ''
      },
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
        { title: 'Capas', data: 'layers' }, 
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
      this.dtInstances.push(dtInstance);
      dtInstance.on('click', '.remove-layer', function(){
        //self.loading.setValue(true);
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.confirm.open(`¿Estás seguro de eliminar la capa ${row.name}?`).afterClosed().subscribe(
          (removeBool)=>{
            if(!removeBool) return;
            self.loading.setValue(true);
            self.adminService.deleteLayer(row.name).subscribe(
              ()=>{
                self.loading.setValue(false);
                //console.log('deleted');
                dtInstance.ajax.reload();
                self.snackbar.open(`Capa ${row.name} eliminada correctamente`, 'CERRAR', {
                  duration : 2000
                });
              }
            )
          }
        );
      });
      dtInstance.on('click', '.edit-layer', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.openEditLayerNameDialog(row);
      });
    });
    this.dtElements._results[1].dtInstance.then(dtInstance =>{
      this.dtInstances.push(dtInstance);
      dtInstance.on('click', '.remove-baselayer', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.confirm.open(`¿Estás seguro de eliminar la capa base que contiene las siguiente capas: ${row.name}?`).afterClosed().subscribe(
          (removeBool)=>{
            if(!removeBool) return;
            self.loading.setValue(true);
            self.adminService.deleteBaseLayer(row.id).subscribe(
              ()=>{
                self.loading.setValue(false);
                //console.log('deleted baselayer')
                dtInstance.ajax.reload();
                self.snackbar.open(`Capa Base ${row.id} eliminada correctamente`, 'CERRAR', {
                  duration : 2000
                });
              }
            );
          }
        );
      });
    });
  }

  goToCreateLayerPage(){
    this.router.navigate(['./new', 'layer'], { relativeTo : this.route })
  }

  goToCreateBaseLayerPage(){
    this.router.navigate(['./new', 'baselayer'], { relativeTo : this.route })
  }

  openEditLayerNameDialog(layerData : any){
    let dialog = this.dialogRef.open(AdminLayerEditComponent);
    dialog.componentInstance.layerData = layerData;
    dialog.afterClosed().subscribe(
      (data)=>{
        if(data) this.dtInstances[0].ajax.reload();
      }
    )
  }

}
