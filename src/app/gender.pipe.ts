import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name:string, gender:string): any {
    if(gender=="female"){
      return`Mrs ${name}`;
    }
    else{
      return`Mr ${name}`;
    }
  }

}
