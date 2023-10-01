import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movieTitle = '';
  result: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((p) => {
      this.movieTitle = p['movieTitle'];
    });
  }

  ngOnInit(): void {
    this.moviesService
      .searchMovies()
      .pipe(
        catchError((err) => {
          console.log('Error', err);
          return of(null);
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.result = res ?? [];
      });
  }
}
