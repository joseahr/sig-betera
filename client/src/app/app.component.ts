import { Component, NgZone, HostListener } from '@angular/core';

import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { MdDialog } from '@angular/material';
import { LoadingAnimateService } from 'ng2-loading-animate';

import { LoginComponent, SignupComponent, ForgotComponent } from './dialogs';
import { AuthService } from './services/auth.service';

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {

  authUser : any;
  menuNav = [
    { title : 'INICIO', link : '', exact : true, icon : 'home' } ,
    { title : 'MAPA', link : 'map', exact : false, icon : 'map' } ,
    { title : 'DESCARGAS', link : 'download', icon : 'file_download' } 
  ]

  showButtonScrollUp : boolean = false;

  constructor(
    private loading : LoadingAnimateService,
    private dialog : MdDialog, 
    private authService : AuthService,
    private ngZone : NgZone,
    private router : Router,
  ){
    this.authService.getUser().subscribe(
      (user)=> { 
        this.ngZone.run( ()=> {
          if(!user.error){
            this.authUser = user; 
          } else {
            this.authUser = null;
          }
        });
      }
    );
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //console.log(window.scrollY, window.innerHeight);
    this.showButtonScrollUp = window.scrollY >= window.innerHeight;
  }

  toggleNavigation(){
    document.querySelector('.cd-nav-container').classList.toggle('is-visible');
    document.querySelector('.cd-overlay').classList.toggle('is-visible');
    document.querySelector('#app-body').classList.toggle('scale-down');
    document.querySelector('md-toolbar').classList.toggle('scale-down');
    document.querySelector('html').classList.toggle('overflow-hidden');
  }

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
          this.ngZone.runOutsideAngular(() => {
            this.loading.setValue(true);
          });
      }
      if (event instanceof NavigationEnd) {
          this._hideSpinner();
      }
      if (event instanceof NavigationCancel) {
          this._hideSpinner();
      }
      if (event instanceof NavigationError) {
          this._hideSpinner();
      }
  }

  private _hideSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      this.loading.setValue(false);
    });
  }

  openLoginDialog(){
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        if(!result) return;
        this.authUser = result;
        this.router.navigate(['']);
      }
    )
  }

  logout(){
    if(!this.authService) return;
    this.authService.logout().subscribe(
      ()=>{
        this.authUser = null;
        this.router.navigate(['']);
      }
    );
  }

  openSignupDialog(){
    let dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        // Hacer algo
      }
    )
  }

  openForgotDialog(){
    let dialogRef = this.dialog.open(ForgotComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        // Hacer algo
      }
    )
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
