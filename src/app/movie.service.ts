import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MovieService {
  private post_url = 'https://localhost:8080/api/v1/movie';
  private get_url = 'https://localhost:8080/api/v1/movies';
  private delete_url = 'https://localhost:8080/api/v1/movie/delete';
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '19ab98ad55324f2be9a19b5ca671c97b';
  private movie_string: string;
  private id: number;

  constructor(public http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this.http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }
  getUpcomingMovies() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-08-01&primary_release_date.lte=2018-08-31' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this.http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this.http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }
  saveMovie(movie: Movie): Observable<Movie> {
    // let options = new RequestOptions({ headers: headers });
    return this.http.post<Movie>(this.post_url, movie);
  }
  deleteMovie(id) {
    return this.http.delete(this.delete_url + '/' + id);
  }
  getwishlist(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.get_url);

  }

}
