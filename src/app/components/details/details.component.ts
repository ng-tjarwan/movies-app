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
