import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterstring: string, prop: string): any {
    if (filterstring == '') {
      return value
    }
    const resultArray = [];
    for (let item of value) {
      if (item[prop] == filterstring) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
