import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-group-edit',
  templateUrl: './admin-group-edit.component.html',
  styleUrls: ['./admin-group-edit.component.css'],
  providers : [ AdminService ]
})
export class AdminGroupEditComponent implements OnInit {

  groupData;

  constructor(
    private loading : LoadingAnimateService,
    private adminService : AdminService,
    private dialogRef: MdDialogRef<AdminGroupEditComponent>
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){}

  changeGroupName(){
    this.loading.setValue(true);
    this.adminService.updateGroup(this.groupData.id, this.groupData.name).subscribe(
      ()=>{
        this.loading.setValue(false);
        this.dialogRef.close('OK');
      }
    )
  }

}
