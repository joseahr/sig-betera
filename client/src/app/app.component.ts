import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { MdDialog } from '@angular/material';
import { LoginComponent } from './dialogs/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public dialog : MdDialog){
    
  }

  openLoginDialog(){
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      result => console.log(result)
    )
  }
}
