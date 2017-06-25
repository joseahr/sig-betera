import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CKEditorComponent } from 'ng2-ckeditor';
import { Observable } from 'rxjs';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-mail',
  templateUrl: './admin-mail.component.html',
  styleUrls: ['./admin-mail.component.css'],
  providers : [ AdminService ],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMailComponent implements OnInit {

  @ViewChild(CKEditorComponent) private ckeditor;

  emailTitle;
  emailContent;
  groupsAndUsers;

  busy;

  constructor(
    private loading : LoadingAnimateService,
    private adminService : AdminService
  ) {
    Observable.forkJoin(
      this.adminService.getUsers().map( res => res.json() ),
      this.adminService.getAllGroups().map( res => res.json() )
    ).subscribe(
      (data)=>{
        let allUsers = data[0] || [];
        let allGroups = data[1] || [];
        //console.log(allUsers, allGroups);
        allUsers.forEach( u => u.selected = false );
        this.groupsAndUsers = allGroups.map( g => 
          ({
            id : g.id, name : g.name, opened : false, selected : false,
            users : allUsers.filter( u => (u.groups || []).includes(g.name) )
          }) 
        );
        this.groupsAndUsers.push({
            id : '-1', name : 'Usuarios sin grupo', opened : false, selected : false,
            users : allUsers.filter( u => !u.groups )
        });
        
        //console.log(this.groupsAndUsers);
      },
      (err) => {
      }
    )
  }

  ngOnInit() {}

  sendMail(){
    //console.log(this.emailContent);
    this.loading.setValue(true);
    let destinators = this.groupsAndUsers.reduce( (selectedUsers, group, index)=>{
      return selectedUsers.concat( group.users.filter( u => u.selected ) );
    }, [])
    .filter( (email, index, arr) => index == arr.indexOf(email) )
    .map( u => u.email );
    //console.log(destinators, 'destinators');
    this.adminService.sendMail(this.emailTitle, encodeURIComponent(this.emailContent), destinators).subscribe(
      ()=>{
        this.emailContent = '';
        this.emailTitle = '';
        this.groupsAndUsers.forEach( g => g.selected = false );
        this.groupsAndUsers.forEach( g => g.users.forEach( u => u.selected = false ) );
        this.loading.setValue(false);
        //console.log('Emails enviados');
      },
      (err)=>{}
    );
  }

  isSomeUserSelected(){
    return (this.groupsAndUsers || []).some( g => g.users.some( u => u.selected ) );
  }

  groupChanged(event, group){
    group.users.forEach( u => u.selected = event.checked )
  }

  setEditorToolbar(){
    this.ckeditor.config.toolbar_Full = [
      { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
      { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
      { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
      { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
          'HiddenField' ] },
      '/',
      { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
      { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
          '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
      { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
      { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
      '/',
      { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
      { name: 'colors', items : [ 'TextColor','BGColor' ] },
      { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
    ];

    this.ckeditor.config.toolbar_Basic = [
        ['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink','-','About']
    ];
  }

}
