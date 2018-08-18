import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MovieService {
  private post_url = 'https://localhost:8070/api/v1/save/movie';
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '19ab98ad55324f2be9a19b5ca671c97b';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }
  getUpcomingMovies() {
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-08-01&primary_release_date.lte=2018-08-31' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }
  saveMovie(movie: string): Observable<Movie> {
    // let options = new RequestOptions({ headers: headers });
    return this._http.post<Movie>(this.post_url, movie);
  }

}
