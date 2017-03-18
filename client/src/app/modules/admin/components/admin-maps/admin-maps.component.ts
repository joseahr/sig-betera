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

  constructor() { }

  ngOnInit() {
  }

}
