import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, Input, Output, EventEmitter,
} from '@angular/core';
import { DragulaService, DragulaDirective } from 'ng2-dragula';
import { Map } from 'openlayers';

@Component({
  selector: 'app-layer-switcher',
  templateUrl: './layer-switcher.component.html',
  styleUrls: ['./layer-switcher.component.css'],
  providers : [ DragulaService ]
})
export class LayerSwitcherComponent implements OnInit {
  
  @ViewChild('mapsDetailsContainer') mapsDetailsContainer: ElementRef;
  @ViewChildren('group') groups: QueryList<ElementRef>;
  @Input('map') map : Map;
  @Output('layersChanged') emmiter : EventEmitter<any> = new EventEmitter();

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
    )
  }

  toggleMaps(){
    this.mapsDetailsContainer.nativeElement.classList.toggle('collapsed');
  }

  getDisplay(layer){
    return layer.get('showInLayerSwitcher') === false ? 'none' : '';
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
