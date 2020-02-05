import { Component, OnInit } from '@angular/core';
import {MoviesService}from '../movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingAll:any[] = [];
  pages:number[]=[];
  currentPage = 1;
  term:any;
  flag:boolean[] = [];

  stars:any[]=[];

  validTitle = [];






// trigger flag
show(i){
    //  window.alert(i);
    this.flag[i]=!this.flag[i]
    // this.overview = this.trendingAll[i].overview;
}
  constructor( public _MoviesService:MoviesService) {
  
    _MoviesService.getTrendingAll(this.currentPage).subscribe( (data) =>{
      
      this.trendingAll = data.results ;
     /*************** stars generation  ********/
     for(let x=0;x<this.trendingAll.length;x++){
          
      let average = Math.round(this.trendingAll[x].vote_average);
      for(let y=1;y<=average;y++){
        this.stars.push(y);
        this.trendingAll[x].stars_avg = this.stars
      }
        this.stars=[];

     }


    }  );

    for(let i=1;i<=10;i++){
     this.pages.push(i);
                         };
      // set default values for flag
    for(let j=0;j<this.trendingAll.length;j++){
      this.flag[j]=false;
                                             }

   

  }
   
   changeapage(ind){
     this.currentPage = ind;
    this._MoviesService.getTrendingAll(this.currentPage).subscribe( (data) =>{ 
      this.trendingAll = data.results ;
    }  );
  };
// get title of movie 
  getTitle(index){
    if(this.trendingAll[index].title == undefined){
      return this.trendingAll[index].name;
    }
    else{
      return this.trendingAll[index].title
    }
  }

  // previous page
      prev(){
        if(this.currentPage>1){
        this.changeapage(this.currentPage -1);
                              }
      else{
        this.currentPage = this.pages.length;
        this.changeapage(this.currentPage -1);
      }
          }
  // next page
      next(){
        if(this.currentPage<this.pages.length-1){
        this.changeapage(this.currentPage +1);
      }
      else{
        this.currentPage =0;
        this.changeapage(this.currentPage +1);

      }


            }




  ngOnInit() {
  }

}
