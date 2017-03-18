import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../../router.transitions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
