import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-layers-new-layer',
  templateUrl: './admin-layers-new-layer.component.html',
  styleUrls: ['./admin-layers-new-layer.component.css'],
  providers : [ AdminService ],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminLayersNewLayerComponent implements OnInit {
  
  files : any = [];
  error : any = null;

  constructor(private adminService : AdminService) { }

  ngOnInit() {}

  onChange(event){
    this.error = null;
    this.files = event.target.files;
  }

  uploadSHP(){
    let formData = new FormData();
    let fileCount = this.files.length;
    if(fileCount == 0){
      return;
    }

    for (let i = 0; i < fileCount; i++) {
        formData.append('shp[]', this.files.item(i));
    }

    this.adminService.postLayer(formData).subscribe(
      (data)=>{
        console.log('Sa subio');
        this.files = [];
      }, 
      (error)=>{
        console.log(error.json(), 'jsooon');
        this.error = error.json();
      }
    )
  }

}
