import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './movie.service';
import { WishlistComponent } from './wishlist/wishlist.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:movieID', component: MovieComponent },
  { path: 'wishlist/:movieID', component: WishlistComponent},
  { path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
