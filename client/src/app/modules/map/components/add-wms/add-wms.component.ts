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

  constructor(private capabilitiesService : WMSCapabilitiesService) { }

  ngOnInit() {
  }

  getCapabilities(){
    if(!this.serviceUrl){}

    this.capabilitiesService.getCapabilities(this.serviceUrl).subscribe(
      (layers)=>{ console.log(layers.json() )}
    );
  }

}
