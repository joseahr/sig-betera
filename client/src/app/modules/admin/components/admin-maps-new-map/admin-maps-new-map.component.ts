import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-maps-new-map',
  templateUrl: './admin-maps-new-map.component.html',
  styleUrls: ['./admin-maps-new-map.component.css'],
  providers : [AdminService],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMapsNewMapComponent implements OnInit {

  mapName = '';

  constructor(
    private snackbar : MdSnackBar,
    private adminService : AdminService, 
    private location : Location
  ) { }

  ngOnInit() {}

  createMap(){
    this.adminService.createMap(this.mapName).subscribe(
      ()=>{
        this.location.back();
      },
      (err) => {
        this.snackbar.open(`Error : ${err.json()}`, 'CERRAR', {
          duration : 2000
        });
      }
    )
  }

}
