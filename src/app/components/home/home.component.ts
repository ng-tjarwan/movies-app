import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fanFavMovies: any[] = [];
  topMovies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getFanFavoriteMovies()
      .subscribe((res) => (this.fanFavMovies = res));

    this.moviesService
      .getTopMovies()
      .subscribe((res) => (this.topMovies = res));
  }
}
