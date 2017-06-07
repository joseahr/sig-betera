import { Component, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { SignupComponent } from '../../dialogs';
import { routerTransition } from '../../router.transitions';
import * as $ from 'jquery';
import 'fullpage.js';
declare const navigator;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class HomeComponent {
  
  layers = [];
  toolbar;
  @ViewChild('full') full : ElementRef;
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  constructor(
    private el : ElementRef, 
    private ngZone : NgZone, 
    private http : Http,
    private router : Router,
    private dialog : MdDialog
    ) {
  }

  ngOnInit(){
    this.getLayers().subscribe(
      layers => {
        this.layers = layers;
        console.log(layers);
      }
    );
  }

  ngOnDestroy(){
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    //$.fn.fullpage.destroy('all');
    console.log('destroyyy');
  }

  ngAfterViewInit() {
    this.toolbar = this.el.nativeElement.parentNode.parentNode.childNodes[0];
    document.body.style.overflow = '';
    //console.log(this.el.nativeElement.parentNode.childNodes[0], this.el.nativeElement, 'toooooool')
  }

  getLayers(){
    return this.http.get('/api/maps')
      .map( res => res.json() )
      .map( res => [].concat( ...res.map( m => m.layers.map( l => l.name ) ) ) );
  }

  openSignupDialog(){
    this.dialog.open(SignupComponent);
  }
  
}
