import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
// OnChanges, AfterContentInit, AfterViewInit, OnDestroy
export class DetailsComponent implements OnInit {
  movieId = '';
  title = '';
  stars = [];
  directors = [];
  genres = [];
  description = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
    });
  }

  ngOnInit(): void {
    this.moviesService.getMovieSummary().subscribe((res: any) => {
      this.stars = res.stars;
      this.directors = res.directors;
      this.genres = res.genres;
      this.description = res.description;
      this.title = res.title;
    });
  }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called.');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called');
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called.');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges called');
  // }
}
