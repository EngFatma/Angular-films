import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
 trendingTv = [];
  constructor(public _MoviesService : MoviesService) { 
    _MoviesService.getTrendingTv().subscribe( (data)=>{
        this.trendingTv = data.results;

    })

  }
   // get title 
   getTitle(index){
    if(this.trendingTv[index].title == undefined){
      return this.trendingTv[index].name;
    }
    else{
      return this.trendingTv[index].title
    }
  }

  ngOnInit() {
  }

}
