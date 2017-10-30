import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
   pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchStr: string): any {
    if (value.length !== 0) {
      return value.filter((item) => 
         item.FlightFrom && item.FlightFrom.toLowerCase().startsWith(searchStr.toLowerCase()) 
      ||  item.FlightTo && item.FlightTo.toLowerCase().startsWith(searchStr.toLowerCase())
      ||  item.Airlines && item.Airlines.toLowerCase().startsWith(searchStr.toLowerCase())
      ||  item.Departdate && item.Departdate.toLowerCase().startsWith(searchStr.toLowerCase())
      ||  item.Returndate && item.Returndate.toLowerCase().startsWith(searchStr.toLowerCase()));
    } else {
      return [];
    }
  };

}
