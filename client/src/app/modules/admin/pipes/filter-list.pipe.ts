import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({name: 'filterList'})
export class FilterListPipe implements PipeTransform {
    transform(value: Observable<any>, arg: string[]): any {
        console.log(value, arg, 'wwww');
        arg = arg || [];
        return value
            .map( grupos => grupos.filter( el=> !arg.includes(el) ) );
    }
}