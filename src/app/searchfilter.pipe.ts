import { Pipe, PipeTransform } from '@angular/core';
import {User} from './models/user.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Allusers: User[], searchValue: string): User[] {

    if(!Allusers || searchValue){
      return Allusers;
    }
    return Allusers.filter(user => user.userName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


  }

}
