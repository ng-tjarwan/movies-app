import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css'],
})
export class DetailsMoviesComponent {
  similarMovies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovieSummary()
      .subscribe((res: any) => (this.similarMovies = res.similarMovies));
  }
}
