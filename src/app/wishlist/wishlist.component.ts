import { MovieService } from './../movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  movie: any;
  movieList = [];
  deleteList: any;
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit() {
    this.movieService.getwishlist().subscribe(fullList => this.movieList = fullList);
    console.log(this.movieList);
    }
    onWorking(id) {
      this.movieService.deleteMovie(id).subscribe(data => this.deleteList = data);
      }

}
