import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  integerValue = 40;
  booleanValue = false;

  fanFavMovies = [
    {
      id: '1',
      title: 'Movie title',
      actors: 'Movie actors',
      releaseYear: 2023,
      rate: 9.5,
      trophies: 1,
      cover:
        'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/1:1/pass/undefined',
    },
    {
      id: '1',
      title: 'Movie title',
      actors: 'Movie actors',
      releaseYear: 2023,
      rate: 9.5,
      trophies: 1,
      cover:
        'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/1:1/pass/undefined',
    },
    {
      id: '1',
      title: 'Movie title',
      actors: 'Movie actors',
      releaseYear: 2023,
      rate: 9.5,
      trophies: 1,
      cover:
        'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/1:1/pass/undefined',
    },
    {
      id: '1',
      title: 'Movie title',
      actors: 'Movie actors',
      releaseYear: 2023,
      rate: 9.5,
      trophies: 1,
      cover:
        'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/1:1/pass/undefined',
    },
  ];

  topMovies = [
    {
      id: '1',
      title: 'Movie title',
      actors: 'Movie actors',
      releaseYear: 2023,
      rate: 9.5,
      trophies: 1,
      cover:
        'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/1:1/pass/undefined',
    },
    {
      id: '1',
      title: 'Movie title',
      actors: 'Movie actors',
      releaseYear: 2023,
      rate: 9.5,
      trophies: 1,
      cover:
        'https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/1:1/pass/undefined',
    },
  ];
}
