import { Component, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
import { sections } from './secciones';
import { routerTransition } from '../../router.transitions';
import * as $ from 'jquery';
import 'fullpage.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class HomeComponent {
  
  secciones = sections;

  constructor(private el : ElementRef, private ngZone : NgZone) {
  }
  
  toolbar;
  @ViewChild('full') full : ElementRef;

  ngOnDestroy(){
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    $.fn.fullpage.destroy('all');
    console.log('destroyyy');
  }

  ngAfterViewInit() {
    this.toolbar = this.el.nativeElement.parentNode.parentNode.childNodes[0];
    document.body.style.overflow = '';
    //console.log(this.el.nativeElement.parentNode.childNodes[0], this.el.nativeElement, 'toooooool')
  }
  
}
