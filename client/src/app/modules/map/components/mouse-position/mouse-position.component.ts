import { 
  Component, OnInit, Input, ViewChild, ElementRef, NgZone,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Map, MapBrowserEvent, Coordinate, coordinate,proj, Observable as olObservable } from 'openlayers';
import { ProjectionService } from '../../services';

@Component({
  selector: 'app-mouse-position',
  templateUrl: './mouse-position.component.html',
  styleUrls: ['./mouse-position.component.css'],
  providers : [ ProjectionService ],
  animations: [
    trigger('collapsed', [
      state('invisible', style({
        height : '0px',
        width : '0px',
        transform : 'translateX(-0.5em)'
      })),
      state('visible', style({
        height : '100%',
        width : '100%',
        transform : 'translateX(-1em)'
      })),
      transition('invisible => visible', animate('500ms ease-in')),
      transition('visible => invisible', animate('400ms ease-out'))
    ])
  ],
})
export class MousePositionComponent implements OnInit {

  containerVisibility : string = 'invisible';

  active : Boolean = false;

  proj25830;
  proj4258;

  coordinate25830 : Coordinate | any;
  coordinate4258 : Coordinate | any;

  name25830;
  name4258;

  @Input('map') map : Map;
  listenerMove;
  outListener;

  constructor(
    private projectionService : ProjectionService,
    private zone : NgZone
    ) {}

  ngOnInit() {
    //this.addListener();
    this.proj4258 = this.projectionService.getDefaultProjection(4258);
    this.proj25830 = this.projectionService.getDefaultProjection(25830);
    this.name25830 = this.projectionService.defaultProjections[0].name;
    this.name4258 = this.projectionService.defaultProjections[1].name;
  }

  addListener(){
    if(this.listenerMove) this.removeListener();
    this.listenerMove = this.map.on( 'pointermove', (e)=>this.onPointerMove(e));
    this.outListener = this.map.getViewport().addEventListener('mouseout', this.onPointerOut.bind(this));
  }

  removeListener(){
    olObservable.unByKey(this.listenerMove);
    this.map.getViewport().removeEventListener(this.outListener);
    this.onPointerOut();
    this.outListener = null;
    this.listenerMove = null;
  }

  onPointerMove(e : MapBrowserEvent){
    let c25830 : any = e.coordinate.map( c => c.toFixed(3) );
    let c4258  : any = proj.transform(c25830, this.proj25830, this.proj4258).map( c => +c.toFixed(5) );
    c4258 = coordinate
      .toStringHDMS(c4258)
      .match(/((\d+° )?(\d+′ )?(\d+″ )?(N|S)?)((\d+° )?(\d+′ )?(\d+″ )?(E|W)?)/g)
      .filter( c => c )
      .reverse();
    this.coordinate4258 = c4258;
    this.coordinate25830 = c25830.map( c => `${c} m`);
    //console.log(this.coordinate25830, this.coordinate4258);
    if(this.containerVisibility != 'visible'){
      this.containerVisibility = 'visible';
    }
  }
  
  onPointerOut(){
    this.coordinate25830 = null;
    this.coordinate4258 = null;
    console.log('outtt');
    if(this.containerVisibility != 'invisible'){
      this.containerVisibility = 'invisible';
    }
  }

  toggleControl(){
    if(this.active){
      this.removeListener();
    } else {
      this.addListener();
    }
    this.active = !this.active;
    document.querySelector('.mouse-position-button').classList.toggle('active');
  }

}
