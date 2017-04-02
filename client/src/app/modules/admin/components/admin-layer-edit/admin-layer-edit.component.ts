import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-layer-edit',
  templateUrl: './admin-layer-edit.component.html',
  styleUrls: ['./admin-layer-edit.component.css'],
  providers : [ AdminService ]
})
export class AdminLayerEditComponent implements OnInit {

  layerData;
  newName;

  constructor(
    private loading : LoadingAnimateService,
    private adminService : AdminService,
    private dialogRef: MdDialogRef<AdminLayerEditComponent>
  ) {
  }

  ngOnInit() {}

  changeLayerName(){
    this.loading.setValue(true);
    this.adminService.updateLayerName(this.layerData.name, this.newName).subscribe(
      ()=>{
        this.loading.setValue(false);
        this.dialogRef.close('OK');
      }
    )
  }

}
