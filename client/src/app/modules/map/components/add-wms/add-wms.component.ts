import { Component, OnInit } from '@angular/core';
import { WMSCapabilitiesService } from '../../services';

@Component({
  selector: 'app-add-wms',
  templateUrl: './add-wms.component.html',
  styleUrls: ['./add-wms.component.css'],
  providers : [WMSCapabilitiesService]
})
export class AddWmsComponent implements OnInit {

  serviceUrl;
  capas : any[];
  capasSeleccionadas : any[] = [];

  constructor(private capabilitiesService : WMSCapabilitiesService) { }

  ngOnInit() {
  }

  onChangeCheckbox(event, name){
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
    if(!this.serviceUrl){}

    this.capabilitiesService.getCapabilities(this.serviceUrl).subscribe(
      (layers)=>{
        this.capas = layers.json();
      }
    );
  }

}
