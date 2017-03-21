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

  links = [
    { path : 'home'   , label : 'Home'     }, 
    { path : 'users'  , label : 'Usuarios' }, 
    { path : 'maps'   , label : 'Mapas'    }, 
    { path : 'layers' , label : 'Capas'    }, 
    { path : 'mail'   , label : 'Mail'     }
  ];

  constructor() { }

  ngOnInit() {
  }

}
