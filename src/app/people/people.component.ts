import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
 trendingPeople = [];
  constructor(public _MoviesService:MoviesService ) { 

    _MoviesService.getTrendingPeople().subscribe((data)=>{
           this.trendingPeople = data.results;
    } )

  }

   // get title of movie 
   getTitle(index){
    if(this.trendingPeople[index].title == undefined){
      return this.trendingPeople[index].name;
    }
    else{
      return this.trendingPeople[index].title
    }
  }
  ngOnInit() {
  }

}
