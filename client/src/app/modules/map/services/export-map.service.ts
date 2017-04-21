import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as ol from 'openlayers';
declare const $;

@Injectable()
export class ExportMapService {

    DEVELOPMENT_GEOSERVER_URL = 'http://localhost:8080/geoserver/betera-workspace/wms';

    constructor(){}

    exportMap(map, options, e){
	    if (true){	// 'download' in e.target 
            var ext = 'pdf'; //$(this).attr("download").split('.').pop();
            if (ext == 'jpg') ext = 'jpeg';
            // Try to change resolution
            if (options.dpi){	
                map.once('precompose', function(event){	
                    var canvas = event.context.canvas;
                    var scaleFactor = options.dpi / 96;
                    canvas.width = Math.ceil(canvas.width * scaleFactor);
                    canvas.height = Math.ceil(canvas.height * scaleFactor);
                    event.context.scale(scaleFactor, scaleFactor);
                });
            }
            //var label = $(e.target).text();
            // Draw a white background before draw (transparent background)
            if (ext!='png'){	
                map.once('precompose', function(e){	
                    e.context.fillStyle = "white";
                    e.context.fillRect(0,0,e.context.canvas.width,e.context.canvas.height);
                })
            }
            // Copy the map
            map.once('postcompose', (event)=>{	
                this.saveCanvas(e.target, event.context.canvas, ext, e, map, options);
                // Redraw map (if dpi change)
                setTimeout(function(){ map.renderSync() }, 500);
            });
            map.renderSync();
		}
		else 
		{	//$(this).hide();
			//$(this).on('click',function(){ alert ("Tu navegador no soporta las funciones de exportar...");});
		}
    }

    saveCanvas(input, canvas, ext, e, map, options){
        if (ext == 'pdf'){	
		    console.log(input.href);
			var data = canvas.toDataURL('image/jpeg');
			var size, w, h, orient, format = 'a4';
			var margin = Number($(input).data('margin')) || 20;
			// Todo en portrait
			orient = 'landscape';
			size = [297,210];
			var sc = Math.min ((size[0] -90 -2*margin)/canvas.width,(size[1] - 40 -2*margin)/canvas.height);
			w = sc * canvas.width;
			h = sc * canvas.height;
			// Center
			var mx = (size[0] - w)/2;
			var my = (size[1] - h - 10)/2;
			// Export!
			var pdf = new jsPDF(orient, "mm", format);
			pdf.addImage(data, 'JPEG', 20, 20, size[0] - 90, size[1] - 40);
			// pdf.save('map.pdf');

			// Ayto Betera Escudo
			//var urlAyto = '/images/betera-logo.png';
			console.log('toDataURL');

			pdf.setTextColor(48,63,159);
			pdf.setFontType("bold");
			pdf.setFontSize(20);
			pdf.text('Ayuntamiento de Bétera', 30, 12.5);

			pdf.setTextColor(0,0,0);
			pdf.setFontSize(7);
			pdf.text('Departamento de Urbanismo', 30, 16.5);
			pdf.text('Sistema de referencia ETRS89 UTM H30 N (EPSG 25830)', size[0] / 2, 16.5);


			pdf.setTextColor(150);
			var date = new Date();
			var fecha = 'Fecha de impresión : ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
			pdf.text(fecha, 20, size[1] - 17);

			var nombreMapa;

			map.getLayers().forEach(function(m){
				if(m.getVisible() && m.get('mapa')) nombreMapa = m.get('name');
			});

			pdf.setTextColor(255,187,0);
			pdf.text('Mapa : ' + nombreMapa, size[0] - 60, 16.5);

			pdf.setTextColor(150, 0, 0);
			pdf.setFontSize(6);
			var extent = map.getView().calculateExtent(map.getSize()).map(function(coord){ return coord.toFixed(3) });
			pdf.text('Coordenadas de las esquinas : ' + extent.join(', '), (size[0] / 2), size[1] - 17 );

			//pdf.line(20, 20, size[0] - 70, 20);
			//pdf.line(size[0] - 70, 20, size[0] - 70, size[1] - 20);
			//pdf.line(size[0] - 70, size[1] - 20, 20, size[1] - 20);
			//pdf.line(20, size[1] - 20, 20, 20);
			pdf.rect(20, 20, size[0] - 90, size[1] - 40);

			this.toDataUrl('http://www.betera.es/fileadmin/templates/ayto/home/images/escudo_moderno.png', function(base64){
				console.log('Inside toDataURL');
				pdf.addImage(base64, 'JPEG', 20, 2, 10, 16);
				pdf.setTextColor(150, 0, 0);
				this.getLegend().then(function(canvasArray){

					var heightTotal = 0;
					var heights = canvasArray.reduce(function(array, c, index){
						var canvas = c.canvas;

						var h = canvasArray[index - 1 || 0]
							?  (canvasArray[index - 1 || 0].canvas.height/5) + 3
							: 0;
						array.push( h + (array[index - 1 || 0] || 0) );
						heightTotal = heightTotal + 1 + (canvas.height/5);
						return array;
					}, []);
					
					var scaleHeight = (size[1] - 42) / heightTotal;
						scaleHeight = scaleHeight > 1 ? 1 : scaleHeight;
					console.log(heights);

					canvasArray.reverse().forEach(function(layerCanvas, index){
						var canvas_ = layerCanvas.canvas;
						var layerName = layerCanvas.layerName;
						console.log('layerCanvas', layerCanvas);
						pdf.text(layerName, size[0] - 65, (heights[index] * scaleHeight) + 20 );

						pdf.addImage(canvas_.toDataURL(), 'JPEG', 
							size[0] - 65
							, (( heights[index] + 1 ) * scaleHeight) + 20
							, +canvas_.width / 5
							, +(canvas_.height / 5) * scaleHeight
						);
					});
					
					var inp = document.createElement('a');
					inp.setAttribute('href', pdf.output('datauristring') );
					inp.setAttribute('download', 'mapa.pdf');
					inp.style.display = 'none';

					document.body.appendChild(inp);
					inp.click();
					document.body.removeChild(inp);

					e.stopPropagation();
					e.preventDefault();

					console.log('done');
				});

			}, null);

		}
		else {
			var inp = document.createElement('a');
			inp.setAttribute('href', canvas.toDataURL('image/'+(options.format||ext), options.quality) );
			inp.setAttribute('download', 'mapa.pdf');
			inp.style.display = 'none';

			document.body.appendChild(inp);
			inp.click();
			document.body.removeChild(inp);
		}
	}

    toDataUrl(src, callback, outputFormat) {
        var img : any = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            var canvas : any = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(dataURL);
            canvas = null;
        };
        img.src = src;
    }
    
    getLegend(map){
        var imagesLegend = [];
        map.getLayers().forEach((l)=>{
            if(l.getVisible() && l.get('layers') && l.get('type') == 'layer')
                l.getLayers().forEach((ll)=>{
                    //console.log(ll.getSource().getUrls()[0]);
                    if(ll.getVisible() && ll.getSource().getUrls()[0] == this.DEVELOPMENT_GEOSERVER_URL){
                        imagesLegend.push({
                            url : this.DEVELOPMENT_GEOSERVER_URL + '?request=GetLegendGraphic&format=image/png&layer=' + ll.get('name'),
                            name : ll.get('name')
                        });
                        //imagesLegend.push({url : '/images/' + ll.get('name') + '.png', name : ll.get('name') });
                    }
                });
        });
        return this.mergeImages(imagesLegend);
    }
    
    mergeImages(images){
        console.log('images', images);
        return Promise.all(images.map(function(img){
            return this.loadImageAsync(img.url)
            .catch(function(e){
                console.log(e);
                return Promise.resolve(null);
            });
        }))
        .then(function(allImages){
            console.log('allImages', allImages);
            var canvasArray = [];
            
            allImages.forEach(function(img : any, index){
                if(!img) return;
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                canvasArray.push({canvas : canvas, layerName : images[index].name});
            });
            console.log('canvasArray', canvasArray);
            return canvasArray;
        });
    }
    
    loadImageAsync(url){
        console.log('loadAsync', url);
        return new Promise(function(res, rej){
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = res.bind(res, img);
            img.onerror = rej;
            //img.onerror = console.log.bind(console);
        });
    }
}