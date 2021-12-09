import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCon',
})
export class NameConPipe implements PipeTransform {
  transform(name: any): any {
    console.log(name.fName + ' ' + name.lName);
    return name.fName + ' ' + name.mName + ' ' + name.lName;
  }
}
