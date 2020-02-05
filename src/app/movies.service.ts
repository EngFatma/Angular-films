import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from   'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {



  constructor(public _HttpClient:HttpClient) { }

  getTrendingAll(indx):Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/day?api_key=4557b69b97f001ef1a51590d12ccfd07&&page='+indx)
  }

  getTrendingMovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=4557b69b97f001ef1a51590d12ccfd07')
  }

  getTrendingTv():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=4557b69b97f001ef1a51590d12ccfd07')
  }

  getTrendingPeople():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/day?api_key=4557b69b97f001ef1a51590d12ccfd07')
  }

}
