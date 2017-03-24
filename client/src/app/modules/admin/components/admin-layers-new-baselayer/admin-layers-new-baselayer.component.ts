import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.transitions';
import { WMSCapabilitiesService } from '../../../map/services';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-layers-new-baselayer',
  templateUrl: './admin-layers-new-baselayer.component.html',
  styleUrls: ['./admin-layers-new-baselayer.component.css'],
  providers : [ AdminService, WMSCapabilitiesService ],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminLayersNewBaselayerComponent implements OnInit {

  serviceUrl;
  capas : any[];
  capasSeleccionadas : any[] = [];
  error : any;

  constructor(
    private capabilitiesService : WMSCapabilitiesService, 
    private adminService : AdminService
  ) { }

  ngOnInit() {
  }

  onChangeCheckbox(event, name){
    console.log(event, name);
    let { checked } = event;
    if(!checked){
      this.capasSeleccionadas = 
        this.capasSeleccionadas.filter( c => c.Name !== name );
    } else {
      let capa = this.capas.find( c => c.Name === name );
      this.capasSeleccionadas.push(capa);
    }
  }

  getCapabilities(){
    if(!this.serviceUrl){
      this.error = 'Debe añadir la url del servicio';
    }
    let regex = /(\?|\&)([^=]+)\=([^&]+)/g;
    let extract = this.serviceUrl.match(regex).join('');
    let url = this.serviceUrl.replace(extract, '') + '?service=WMS&request=GetCapabilities';
    this.capabilitiesService.getCapabilities(url).subscribe(
      (layers)=>{
        this.error = null;
        this.capas = layers.json();
      }, (error) =>{
        this.error = error.json();
      }
    );
  }

  addBaseLayer(){
    let regex = /(\?|\&)([^=]+)\=([^&]+)/g;
    let extract = this.serviceUrl.match(regex).join('');
    let serviceURL = this.serviceUrl.replace(extract, '');
    let layers = this.capasSeleccionadas.map( l => l.Name );

    this.adminService.postBaseLayer(serviceURL, layers).subscribe(
      ()=>{
        this.reset();
      }, (err)=>{
        this.error = err.json();
      }
    )
  }

  reset(){
    this.capas = null;
    this.capasSeleccionadas = [];
  }

}
