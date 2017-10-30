import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  onDestroy() {
  }
  
  transform(value: any, args: any[]): any {
    return value.sort(function (a, b) {
      let nameA = a.FlightFrom === undefined ? 'Null' : a.FlightFrom && a.FlightFrom.toLowerCase(),
        nameB = b.FlightFrom === undefined ? 'Null' : b.FlightFrom && b.FlightFrom.toLowerCase();
      if (nameA < nameB) { // sort string ascending
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; // default return value (no sorting)
    });
  };

}
