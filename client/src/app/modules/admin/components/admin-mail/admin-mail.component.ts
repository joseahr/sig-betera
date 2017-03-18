import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.transitions';

@Component({
  selector: 'app-admin-mail',
  templateUrl: './admin-mail.component.html',
  styleUrls: ['./admin-mail.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
