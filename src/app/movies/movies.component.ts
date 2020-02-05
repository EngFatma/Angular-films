import { Component, OnInit } from '@angular/core';
import {MoviesService}from '../movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies = [];
  
  constructor(public _MoviesService:MoviesService) { 
    _MoviesService.getTrendingMovies().subscribe( (data)=>{
      this.trendingMovies = data.results;
    })
  }
  // get title 
  getTitle(index){
    if(this.trendingMovies[index].title == undefined){
      return this.trendingMovies[index].name;
    }
    else{
      return this.trendingMovies[index].title
    }
  }

  ngOnInit() {
  }

}
