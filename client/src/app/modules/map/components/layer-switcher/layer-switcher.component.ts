import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, Input, Output, EventEmitter,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { DragulaService, DragulaDirective } from 'ng2-dragula';
import { Map } from 'openlayers';

@Component({
  selector: 'app-layer-switcher',
  templateUrl: './layer-switcher.component.html',
  styleUrls: ['./layer-switcher.component.css'],
  providers : [ DragulaService ],
  animations: [
    trigger('collapsed', [
      state('invisible', style({
        transform : 'translateX(-100%)',
        opacity : 0,
        display : 'none'
      })),
      state('visible', style({
        transform : 'translateX(0%)',
        opacity : 1,
        display : ''
      })),
      transition('invisible => visible', animate('500ms ease-in')),
      transition('visible => invisible', animate('500ms ease-out'))
    ])
  ],
})
export class LayerSwitcherComponent implements OnInit {
  
  @ViewChild('mapsDetailsContainer') mapsDetailsContainer: ElementRef;
  @Input('map') map : Map;
  @Output('layersChanged') emmiter : EventEmitter<any> = new EventEmitter();
  @Input('visibility') collapsed;

  constructor(
    private dragulaService: DragulaService
  ) {
    //console.log('maaap');
  }

  getReversed(array : any[]){
    return array.reverse();
  }

  ngOnInit() {
    
    this.dragulaService.setOptions('layers', {
      moves : (el, container, handle) => handle.classList.contains('handle'),
      accepts : (el, target, source, sibling) => target.attributes[2].value == 'layers'
    });
    this.dragulaService.setOptions('layerGroup', {
      moves : (el, container, handle) => handle.classList.contains('handleGroup'),
      accepts : (el, target, source, sibling) => target.attributes[1].value == 'layerGroup' && el.parentNode == target
    });
    this.dragulaService.drop.subscribe(
      ()=>{
        this.emmiter.next();
      }
    );
  }

  getLengthWithoutNotVisibleLayers(){
    //console.log(this.map.getLayers().getArray());
    //console.log(this.map.getLayers().getArray().filter( m => !(m.get('showInLayerSwitcher') === false) ), 'arrrr');
    return this.map.getLayers().getArray().filter( m => !(m.get('showInLayerSwitcher') === false) ).length;
  }

  toggleMaps(){
    this.mapsDetailsContainer.nativeElement.classList.toggle('collapsed');
  }

  getDisplay(layer){
    return layer.get('showInLayerSwitcher') === false 
      ? 'invisible' 
      : this.collapsed;
  }

  changeVisible(event, indexGroup){
    this.map
    .getLayers()
    .item(indexGroup)
    .setVisible(event.checked);
  }

  changeVisibleGroupLayer(event, indexGroup, indexLayer){
    this.map
    .getLayers()
    .item(indexGroup)
    .get('layers')
    .item(indexLayer)
    .setVisible(event.checked);
  }

  moveLayerUp(indexGroup){
    if(indexGroup >= 0){
      let layer = this.map.getLayers().getArray().splice(indexGroup, 1)[0];
      this.map.getLayers().getArray().splice(indexGroup + 1, 0, layer);
      layer.changed();
      this.emmiter.next();
    }
  }

  moveLayerDown(indexGroup){
    if(indexGroup > 0){
      let layer = this.map.getLayers().getArray().splice(indexGroup, 1)[0];
      this.map.getLayers().getArray().splice(indexGroup - 1, 0, layer);
      layer.changed();
      this.emmiter.next();
    }
  }

  moveLayerInGroupUp(indexGroup, indexLayer){
    if(indexGroup >= 0 && indexLayer >= 0){
      let layerGroup = this.map.getLayers().item(indexGroup).get('layers').getArray();
      let layer = layerGroup.splice(indexLayer, 1)[0];
      layerGroup.splice(indexLayer + 1, 0, layer);
      layer.changed();
      this.emmiter.next();
    }
  }

  moveLayerInGroupDown(indexGroup, indexLayer){
    if(indexGroup >= 0 && indexLayer > 0){
      let layerGroup = this.map.getLayers().item(indexGroup).get('layers').getArray();
      let layer = layerGroup.splice(indexLayer, 1)[0];
      layerGroup.splice(indexLayer - 1, 0, layer);
      layer.changed();
      this.emmiter.next();
    }
  }

  changeOpacity(event, indexGroup){
    this.map
    .getLayers()
    .item(indexGroup)
    .setOpacity(event.value);
  }

  changeOpacityGroupLayer(event, indexGroup, indexLayer){
    //console.log('changeOpacityGroupLayer', indexGroup, indexLayer)
    this.map
    .getLayers()
    .item(indexGroup)
    .get('layers')
    .item(indexLayer)
    .setOpacity(event.value);
  }

}
