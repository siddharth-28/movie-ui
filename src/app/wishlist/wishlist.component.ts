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
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // this.router.params.subscribe((params) => {
    //   const id = params['movieID'];
    //   this.movieService.getMovie(id).subscribe(data => {
    //     this.movie = data;
    //     // console.log(data);
    //   });
    // });
  }

}
