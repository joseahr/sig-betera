import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
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
    private adminService : AdminService,
    private dialogRef: MdDialogRef<AdminLayerEditComponent>
  ) {
  }

  ngOnInit() {}

  changeLayerName(){
    this.adminService.updateLayerName(this.layerData.name, this.newName).subscribe(
      ()=>{
        this.dialogRef.close('OK');
      }
    )
  }

}
