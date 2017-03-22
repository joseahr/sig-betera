import { Component, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
import { sections } from './secciones';
import { routerTransition } from '../../router.transitions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class HomeComponent {
  
  constructor(private el : ElementRef, private ngZone : NgZone) {
    this.secciones = sections;
  }
  
  toolbar;

  cols = window.innerWidth < 600 ? 1 : 2;

  secciones : any[];

  ngAfterViewInit() {
    this.toolbar = this.el.nativeElement.parentNode.parentNode.childNodes[0];
    document.body.style.overflow = '';
    //console.log(this.el.nativeElement.parentNode.childNodes[0], this.el.nativeElement, 'toooooool')
  }

  @HostListener('window:resize', ['$event'])
  setCols(){
    if(window.innerWidth < 600 && this.cols !== 1){
      this.cols = 1;
    } else if(window.innerWidth >= 600){
      this.cols = 2;
    }
  }

  @HostListener('window:scroll', ['$event'])
  setToolbarFixed(event){
    this.ngZone.runOutsideAngular(()=>{
      if(window.scrollY > 50){
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
