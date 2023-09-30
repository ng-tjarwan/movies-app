import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent
  implements OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy
{
  movieId = '';
  title = 'Movie Title';
  stars = ['First Star', 'Second Star', 'Third Star'];
  directors = ['First Dir', 'Second Dir', 'Third Dir'];
  genres = ['First Gen', 'Second Gen', 'Third Gen'];
  description = 'This it going to be a placeholder for the movie plot';

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit called.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
  }
}
