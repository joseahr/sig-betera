import { Component, OnInit, HostListener, NgZone, ElementRef } from '@angular/core';

import { routerTransition } from '../../../../router.transitions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminComponent implements OnInit {
  toolbar;

  links = [
    { path : 'home'   , label : 'Home'     }, 
    { path : 'users'  , label : 'Usuarios' }, 
    { path : 'maps'   , label : 'Mapas'    }, 
    { path : 'layers' , label : 'Capas'    }, 
    { path : 'mail'   , label : 'Mail'     }
  ];

  constructor(private zone : NgZone, private elementRef : ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.toolbar = this.elementRef.nativeElement.childNodes[0]; 
  }

  @HostListener('window:scroll', ['$event'])
  setToolbarFixed(event){
    this.zone.runOutsideAngular(()=>{
      if(window.scrollY > 0){
        if(this.toolbar.style.position != 'fixed'){
          this.toolbar.style.position = 'fixed';
        }
      } else {
        if(this.toolbar.style.position != 'relative'){
          this.toolbar.style.position = 'relative';
        } 
      }
    });
  }

}
