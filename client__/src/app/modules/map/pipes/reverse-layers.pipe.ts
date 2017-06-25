import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from 'openlayers';
@Pipe({name: 'reverseLayers'})
export class ReverseLayersPipe implements PipeTransform {
    transform(value: any[], arg: any): any {
        return value.reverse();
    }
}