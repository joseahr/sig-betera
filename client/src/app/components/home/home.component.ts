import { Component, ViewChild, ElementRef, HostListener, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { SignupComponent } from '../../dialogs';
import { routerTransition } from '../../router.transitions';


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
    private dialog : MdDialog,
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

  scrollTo(selector){
    let node = document.querySelector(selector),
        val  = 0;

    if (node.offsetParent) {
        do {
            val += node.offsetTop;
        } while (node = node.offsetParent);
    } else {
      val = node.offsetTop
    }
      
    this.scrollToY(val, 1000, 'easeInOutQuint');
    //console.log(node, val, selector, node.getBoundingClientRect().top, node.offsetHeight);

  }

  getHeight(element){
      let height = element.clientHeight;
      let computedStyle = window.getComputedStyle(element); 
      height += parseInt(computedStyle.marginTop, 10);
      height += parseInt(computedStyle.marginBottom, 10);
      height += parseInt(computedStyle.borderTopWidth, 10);
      height += parseInt(computedStyle.borderBottomWidth, 10);
      return height;
  }

  getLayers(){
    return this.http.get('/api/maps')
      .map( res => res.json() )
      .map( res => [].concat( ...res.map( m => m.layers.map( l => l.name ) ) ) );
  }

  openSignupDialog(){
    this.dialog.open(SignupComponent);
  }

  // main function
  scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use
  
      var scrollY = window.scrollY,
          scrollTargetY = scrollTargetY || 0,
          speed = speed || 2000,
          easing = easing || 'easeOutSine',
          currentTime = 0;
  
      // min time .1, max time .8 seconds
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
  
      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      var PI_D2 = Math.PI / 2,
          easingEquations = {
              easeOutSine: function (pos) {
                  return Math.sin(pos * (Math.PI / 2));
              },
              easeInOutSine: function (pos) {
                  return (-0.5 * (Math.cos(Math.PI * pos) - 1));
              },
              easeInOutQuint: function (pos) {
                  if ((pos /= 0.5) < 1) {
                      return 0.5 * Math.pow(pos, 5);
                  }
                  return 0.5 * (Math.pow((pos - 2), 5) + 2);
              }
          };
  
      // add animation loop
      function tick() {
          currentTime += 1 / 60;
  
          var p = currentTime / time;
          var t = easingEquations[easing](p);
  
          if (p < 1) {
              window.requestAnimFrame(tick);
  
              window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
              console.log('scroll done');
              window.scrollTo(0, scrollTargetY);
          }
      }
  
      // call it once to get started
      tick();
  }
  
}
