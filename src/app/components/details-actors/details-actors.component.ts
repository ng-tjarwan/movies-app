import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css'],
})
export class DetailsActorsComponent implements OnInit {
  movieActors: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovieSummary()
      .subscribe((res: any) => (this.movieActors = res.actors));
  }
}
