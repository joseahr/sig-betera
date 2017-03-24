import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { WMSCapabilitiesService } from '../../services';

@Component({
  selector: 'app-add-wms',
  templateUrl: './add-wms.component.html',
  styleUrls: ['./add-wms.component.css'],
  providers : [ WMSCapabilitiesService ]
})
export class AddWmsComponent implements OnInit {

  serviceUrl;
  capas : any[];
  capasSeleccionadas : any[] = [];
  error : any;

  constructor(private capabilitiesService : WMSCapabilitiesService, public dialogRef: MdDialogRef<AddWmsComponent>) { }

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

  closeWithData(){
    let regex = /(\?|\&)([^=]+)\=([^&]+)/g;
    let extract = this.serviceUrl.match(regex).join('');
    let serviceURL = this.serviceUrl.replace(extract, '');
    let layers = this.capasSeleccionadas;
    this.dialogRef.close({ serviceURL, layers });
  }

  reset(){
    this.capas = null;
    this.capasSeleccionadas = [];
  }

}
