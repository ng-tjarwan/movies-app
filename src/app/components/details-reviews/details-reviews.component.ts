import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css'],
})
export class DetailsReviewsComponent {
  movieReviews: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovieSummary()
      .subscribe((res: any) => (this.movieReviews = res.reviews));
  }
}
