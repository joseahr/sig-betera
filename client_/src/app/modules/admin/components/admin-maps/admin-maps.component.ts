import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { MdSnackBar } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { ConfirmDialogService } from '../../../../services';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

declare const $;

@Component({
  selector: 'app-admin-maps',
  templateUrl: './admin-maps.component.html',
  styleUrls: ['./admin-maps.component.css'],
  providers : [ AdminService ],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMapsComponent implements OnInit {

  dtOptionsDefaultMaps;
  dtOptionsMaps;
  dtInstances = [];

  @ViewChildren(DataTableDirective) 
  private dtElements;

  constructor(
    private confirm : ConfirmDialogService,
    private loading : LoadingAnimateService,
    private router : Router,
    private adminService : AdminService,
    private snackbar : MdSnackBar,
  ) {
    this.dtOptionsMaps = {
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
        url : 'api/admin/maps',
        dataSrc : ''
      },
      columns : [
        {
          title : 'Editar',
          defaultContent : `
          <button md-button class="mat-button edit-map">
            <md-icon style="color : #ffbb00" class="material-icons mat-icon">mode_edit</md-icon>
          </button>`
        },
        {
          title : 'Eliminar',
          defaultContent : `
          <button md-button class="mat-button remove-map">
            <md-icon style="color : #ff0000" class="material-icons mat-icon">remove_circle_outline</md-icon>
          </button>`
        },
        { title: 'ID', data: 'id'}, { title: 'Nombre', data: 'name' }, { title: 'Capas', data: 'layers' }, { title: 'Capas Base', data: 'baselayers' }],
      columnDefs : [{
        render : function ( data, type, row ) {
          return (data || []).length;
        },targets : [4, 5]
      }]
    };

    this.dtOptionsDefaultMaps = {
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
        url : 'api/admin/default-maps',
        dataSrc : ''
      },
      columns: [
        {
          title : 'Eliminar',
          defaultContent : `
          <button md-button class="mat-button remove-default-map">
            <md-icon style="color : #ff0000" class="material-icons mat-icon">remove_circle_outline</md-icon>
          </button>`
        },
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
      ]
    };
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    let self = this;
    this.dtElements._results[0].dtInstance.then(dtInstance =>{
      this.dtInstances.push(dtInstance);
      dtInstance.on('click', '.remove-map', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.confirm.open(
          `¿Estás seguro de eliminar el mapa ${row.name}?`
        ).afterClosed().subscribe(
          (removeBool)=>{
            if(!removeBool) return;
            self.loading.setValue(true);
            self.adminService.deleteMap(row.id).subscribe(
              ()=>{
                self.loading.setValue(false);
                //console.log('deleted');
                self.dtInstances.forEach( dtI => dtI.ajax.reload() )
                //dtInstance.ajax.reload();
                self.snackbar.open(`Mapa ${row.name} eliminado correctamente`, 'CERRAR', {
                  duration : 2000
                });
              }
            );
          }
        );
      });
      dtInstance.on('click', '.edit-map', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.goToEditMap(row.id);
      })
    });
    this.dtElements._results[1].dtInstance.then(dtInstance =>{
      this.dtInstances.push(dtInstance);
      dtInstance.on('click', '.remove-default-map', function(){
        let row_dom = $(this).closest('tr');
        let row = dtInstance.row(row_dom).data();
        self.confirm.open(
          `El mapa ${row.name} dejará de ser visible por todos los usuarios. ¿Eliminar como mapa por defecto?`
        ).afterClosed().subscribe(
          (removeBool)=>{
            if(!removeBool) return;
            self.loading.setValue(true);
            self.adminService.deleteDefaultMap(row.id).subscribe(
              ()=>{
                self.loading.setValue(false);
                //console.log('deleted baselayer')
                dtInstance.ajax.reload();
                self.snackbar.open(`Mapa por defecto ${row.name} eliminado correctamente`, 'CERRAR', {
                  duration : 2000
                });
              }
            );
          }
        );
    
      });
    });
  }

  goToCreateMap(){
    this.router.navigateByUrl('/admin/maps/new/map');
  }

  goToCreateDefaultMap(){
    this.router.navigateByUrl('/admin/maps/new/default');
  }

  goToEditMap(id){
    this.router.navigateByUrl(`/admin/maps/edit/${id}`);
  }

}
