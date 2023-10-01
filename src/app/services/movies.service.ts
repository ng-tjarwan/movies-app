import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getTopMovies() {
    return this.httpClient.get<any[]>('assets/data/topMovies.json');
  }

  getFanFavoriteMovies() {
    return this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json');
  }

  getMovieSummary() {
    return this.httpClient.get<any[]>('assets/data/movieSummary.json');
  }

  searchMovies() {
    return this.httpClient.get<any[]>('assets/data/movieSearch.json');
  }
}
