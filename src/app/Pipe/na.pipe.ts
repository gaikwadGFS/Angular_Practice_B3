import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  // transform(value: unknown): unknown {
  //   if (value == null || value == undefined || value == '') {
  //     return '--';
  //   } else {
  //     return value;
  //   }
  // }


  transform(value: unknown,emptyString :string): unknown {
    if (value == null || value == undefined || value == '') {
      return emptyString;
    } else {
      return value;
    }
  }

}
