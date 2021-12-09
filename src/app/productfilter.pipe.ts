import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter',
  // pure:false
})
export class ProductfilterPipe implements PipeTransform {
  transform(value: any, searchText: any): any {
    if (value.length === 0) {
      return value;
    }
    console.log('list of obj:', value);
    console.log('search word:', searchText);
    return value.filter(function (search) {
      return (
        search.proName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      );
    });
  }
}
