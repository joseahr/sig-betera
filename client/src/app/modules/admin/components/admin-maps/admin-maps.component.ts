import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.transitions';

@Component({
  selector: 'app-admin-maps',
  templateUrl: './admin-maps.component.html',
  styleUrls: ['./admin-maps.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMapsComponent implements OnInit {

  dtOptionsDefaultMaps;
  dtOptionsMaps;

  constructor() {
    this.dtOptionsMaps = {
      ajax: 'api/admin/maps',
      columns: [
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
        { title: 'Capas', data: 'layers' },
        { title: 'Capas Base', data: 'baselayers' }
      ]
    };
    this.dtOptionsDefaultMaps = {
      ajax: 'api/admin/default-maps',
      columns: [
        { title: 'ID', data: 'id'}, 
        { title: 'Nombre', data: 'name' }, 
      ]
    };
  }

  ngOnInit() {
  }

}
