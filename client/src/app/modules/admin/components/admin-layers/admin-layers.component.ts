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

  constructor() { }

  ngOnInit() {
  }

}
