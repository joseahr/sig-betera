import { Component, OnInit, ViewChildren, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { routerTransition } from '../../../../router.transitions';
import { DragulaService, DragulaDirective } from 'ng2-dragula';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-maps-edit',
  templateUrl: './admin-maps-edit.component.html',
  styleUrls: ['./admin-maps-edit.component.css'],
  providers : [ AdminService, DragulaService ],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminMapsEditComponent implements OnInit {
  
  map;
  AllLayersNotInMap;
  AllBaseLayersNotInMap;
  originalOrder;
  selectedLayerToAdd;
  selectedBaseLayerToAdd;
  hasChangedOrder : boolean = false;

  constructor(
    private zone : NgZone,
    private route : ActivatedRoute,
    private snackBar : MdSnackBar,
    private dragulaService: DragulaService,
    private adminService : AdminService
  ) {
    // Configurar Drag&Drop para que solo funcione apretando al botón
    this.dragulaService.setOptions('order', {
      moves : (el, container, handle) => handle.classList.contains('handle')
    });
    // Escuchamos al evento dropModel
    this.dragulaService.dropModel.subscribe(
      ()=>{
        // Asignamos la posición al parámetro position de cada capa
        this.map.orden.forEach( (c, i)=> c.position = i );
        // Llamamos a la función compareOrder
        this.compareOrder();
      }
    );
    // Parámetros de la ruta
    let params : any = this.route.snapshot.params;
    //console.log(params.id);
    
    // Obtenemos el mapa
    Observable.forkJoin(
      this.adminService.getAllLayers().map( res => res.json().data ),
      this.adminService.getAllBaseLayers().map( res => res.json().data ),
      this.adminService.getMapById(params.id).map( res => res.json() )
    )
    .map( res =>{
      let [ allLayers, allBaseLayers, map ] = res;
      //console.log(map);
      console.log(res);
      this.originalOrder = [];
      map.orden = (map.orden || []).sort( (a, b)=> a.position - b.position );
      map.orden.forEach( c =>{ c.id_map = params.id; this.originalOrder.push(c); });
      console.log(allLayers, 'allLayers', allBaseLayers, 'allBaseLayers', map, 'map');
      return [map, allLayers, allBaseLayers];
    }).subscribe(
      data =>{
        let [ map, allLayers, allBaseLayers ] = data;
        let mapLayers = map.layers || [];
        let mapBaselayers = map.baselayers || [];

        this.map = map;
        this.AllLayersNotInMap = allLayers.filter( l => !mapLayers.find( ll => l.id == ll.id ) );
        this.AllBaseLayersNotInMap = allBaseLayers.filter( l => !mapBaselayers.find( ll => l.id == ll.id ) )
        //console.log(data, 'data');
      }
    );
  }

  ngOnInit() {}

  compareOrder(){
    let actualOrder : any[] = this.map.orden;
    //console.log('actual', actualOrder)
    //console.log(this.originalOrder);
    this.hasChangedOrder = !actualOrder.every( (value, idx)=> value.id_layer == this.originalOrder[idx].id_layer );
  }

  getColor(capa){
    return capa.layer_type == 'layer' ? '#ffbb00' : '#00bbff';
  }

  saveOrder(){
    let actualOrder : any[] = this.map.orden;
    let params : any = this.route.snapshot.params;

    this.adminService.setMapOrder(params.id, actualOrder).subscribe(
      ()=>{
        console.log('order saved');
        this.originalOrder = [];
        this.map.orden.forEach( c => this.originalOrder.push(c) );
        this.compareOrder();
        this.snackBar.open('Orden guardado correctamente', 'CERRAR', { duration : 2500 })
      }
    );
  }

  addSelectedLayer(){
    let id_layer = this.selectedLayerToAdd;
    console.log(id_layer, '');
    let id_map = this.map.id;
    let layer = this.AllLayersNotInMap.find( l => l.id == id_layer );
    this.adminService.addLayerToMap(id_map, id_layer).subscribe(
      ()=>{
        this.selectedLayerToAdd = null;
        let newLayer = { id_map, id_layer, position : this.map.orden.length, layer_type : 'layer', name : layer.name };
        this.AllLayersNotInMap = this.AllLayersNotInMap.filter( l => l.id != id_layer);

        this.map.orden.push(newLayer);
        this.originalOrder.push(newLayer);
      }
    );
  }

  deleteLayerFromMap(id_layer){
    this.adminService.deleteMapLayer(this.map.id, id_layer).subscribe(
      ()=>{
        //console.log(this.map.orden.filter( l => !(l.id == id_layer && l.layer_type == 'layer') ));
        this.map.orden = this.map.orden.filter( l => !(l.id_layer == id_layer && l.layer_type == 'layer') );
        this.map.orden.forEach( (c, i)=> c.position = i );
        this.originalOrder = this.originalOrder.filter( l => !(l.id_layer == id_layer && l.layer_type == 'layer') );
      }
    )
  }

  deleteBaseLayerFromMap(id_layer){
    this.adminService.deleteMapBaseLayer(this.map.id, id_layer).subscribe(
      ()=>{
        //console.log(this.map.orden.filter( l => !(l.id == id_layer && l.layer_type == 'layer') ));
        this.map.orden = this.map.orden.filter( l => !(l.id_layer == id_layer && l.layer_type == 'base') );
        this.map.orden.forEach( (c, i)=> c.position = i );
        this.originalOrder = this.originalOrder.filter( l => !(l.id_layer == id_layer && l.layer_type == 'base') );
      }
    )
  }

  addSelectedBaseLayer(){
    let id_layer = this.selectedBaseLayerToAdd;
    let id_map = this.map.id;
    let layer = this.AllBaseLayersNotInMap.find( l => l.id == id_layer );
    this.adminService.addBaseLayerToMap(id_map, id_layer).subscribe(
      ()=>{
        let newLayer = { id_map, id_layer, position : this.map.orden.length, layer_type : 'base', name : layer.name };
        this.selectedBaseLayerToAdd = null;
        this.AllBaseLayersNotInMap = this.AllBaseLayersNotInMap.filter( l => l.id != id_layer);

        this.map.orden.push(newLayer);
        this.originalOrder.push(newLayer);
      }
    );
  }

}
