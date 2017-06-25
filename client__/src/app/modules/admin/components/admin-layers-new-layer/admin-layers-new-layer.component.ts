import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingAnimateService } from 'ng2-loading-animate';
import { BytesPipe } from 'angular-pipes/src/math/bytes.pipe';
import { routerTransition } from '../../../../router.transitions';
import { AdminService } from '../../services';

@Component({
  selector: 'app-admin-layers-new-layer',
  templateUrl: './admin-layers-new-layer.component.html',
  styleUrls: ['./admin-layers-new-layer.component.css'],
  providers : [ AdminService, BytesPipe ],
  animations: [routerTransition()],
  host : { '[@routerTransition]': '' }
})
export class AdminLayersNewLayerComponent implements OnInit {
  
  @ViewChild('dropZone') dropzone : ElementRef;
  files : any = [];
  layerName : string = '';
  error : any = null;

  constructor(
    private loading : LoadingAnimateService,
    private adminService : AdminService
  ) { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.dropzone.nativeElement.addEventListener('drop', this.handleFileSelect.bind(this), false);
    this.dropzone.nativeElement.addEventListener('dragover', this.handleDragOver.bind(this), false);
    this.dropzone.nativeElement.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
  }

  onChange(event){
    this.error = null;
    this.files = event.target.files;
  }

  handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.dropzone.nativeElement.style.opacity = '1';
    this.files = evt.dataTransfer.files; // FileList object.
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    this.dropzone.nativeElement.style.opacity = '0.3';
  }

  handleDragLeave(evt){
    evt.stopPropagation();
    evt.preventDefault();
    this.dropzone.nativeElement.style.opacity = '1';
  }

  uploadSHP(){
    this.error = null;
    let layerName = this.layerName;
    let formData = new FormData();
    let fileCount = this.files.length;
    if(fileCount == 0){
      return;
    }

    for (let i = 0; i < fileCount; i++) {
        formData.append('shp[]', this.files.item(i));
    }
    this.loading.setValue(true);
    this.adminService.postLayer(formData, layerName).subscribe(
      (data)=>{
        //console.log('Sa subio');
        this.files = [];
        this.layerName = '';
        this.loading.setValue(false);
      }, 
      (error)=>{
        //console.log(error.json(), 'jsooon');
        this.error = error.json().msg;
        this.loading.setValue(false);
      }
    )
  }

}
