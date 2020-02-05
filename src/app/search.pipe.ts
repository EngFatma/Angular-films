import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any[],inp:string):any {

    if(inp == undefined){
      return movies;
    }

    else{
    
    return  movies.filter(function(movies){

        if(movies.title != undefined){

        return movies.title.toLowerCase().includes(inp.toLowerCase());
     
       
                                     }
      })

    }

   
    
  }

}
   