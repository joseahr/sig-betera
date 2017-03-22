import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.transitions';

@Component({
  selector: 'app-admin-layers',
  templateUrl: './admin-layers.component.html',
  styleUrls: ['./admin-layers.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminLayersComponent implements OnInit {

  dtOptionsLayers;
  dtOptionsBase;

  constructor() {
    this.dtOptionsLayers = {
      scrollX : true,
      scrollY : '50vh',
      scrollCollapse: true,
      ajax: 'api/admin/layers',
      columns: [
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
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
        { title: 'URL', data: 'service_url' },
      ]
    };
  }

  ngOnInit() {
  }

}
