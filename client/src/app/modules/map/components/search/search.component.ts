import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Feature, Map, interaction, MapBrowserPointerEvent, geom, Observable as olObs} from 'openlayers';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { UserLayersService } from '../../services';

enum SearchInteraction {
  Point = 1, Box
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers : [ UserLayersService ]
})
export class SearchComponent implements OnInit {
  
  private found : any;
  active : Boolean = false;
  activeInteraction : SearchInteraction = null;
  private boxInteraction : interaction.DragBox = new interaction.DragBox();
  private clickInteraction : ol.Object | ol.Object[];

  @Input('map') map : Map;

  constructor(
    private zone : NgZone,
    private userLayerService : UserLayersService,
    private loading : LoadingAnimateService
  ) {
    this.boxInteraction.on('boxend', this.boxHandler.bind(this));
  }

  ngOnInit() {}

  clickHandler(e : MapBrowserPointerEvent){
    let point = new geom.Point(e.coordinate);
    let feature = new Feature(point);
    this.search(feature);
  }

  boxHandler(){
    let box = this.boxInteraction.getGeometry();
    let feature = new Feature(box);
    this.search(feature);
  }

  search(feature : Feature){
    this.loading.setValue(true);
    let layerNames = this.getActiveLayers();
    //console.log('layerNAmes', layerNames)
    this.userLayerService.getFeatures(feature, layerNames).subscribe(
      (data)=>{
        this.loading.setValue(false);
        let features = data.json();
        this.zone.run(()=>{
          this.found = features;
          this.map.render();
        });
        console.log(features, 'featurrees');
      }, 
      (err)=>{
        this.loading.setValue(false);
      }
    )
  }

  getActiveLayers(){
    let layerNames = [];
    this.map.getLayers().forEach( l => {
      l.get('layers').forEach(al => {
        console.log('layer', al.get('type'), al.get('visible'), al.getVisible())
        if(al.get('visible') && al.get('type') == 'layer'){
          layerNames.push(al.get('name'));
        }
      });
    });
    return layerNames;
  }

  setActive(value : Boolean, interaction? : SearchInteraction){
    if(!value){
      this.active = false;
      this.found = null;
      this.activeInteraction = null;
      this.map.removeInteraction(this.boxInteraction);
      olObs.unByKey(this.clickInteraction);
    } else {
      if(!interaction) return;
      this.active = true;
      this.setInteraction(interaction);
    }
  }

  setInteraction(interaction : SearchInteraction){
    console.log(interaction, this.activeInteraction, SearchInteraction.Point, SearchInteraction.Box, 'slsjlsk');
    if(interaction == this.activeInteraction) return;

    if(interaction == SearchInteraction.Point){
      this.map.removeInteraction(this.boxInteraction);
      this.clickInteraction = this.map.on('singleclick', this.clickHandler.bind(this));
      this.activeInteraction = SearchInteraction.Point;
    } else {
      olObs.unByKey(this.clickInteraction);
      this.map.addInteraction(this.boxInteraction);
      this.activeInteraction = SearchInteraction.Box;
    }
  }



}
