import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { DetailsComponent } from '../components/details/details.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search/:movieTitle', component: SearchComponent },

  // Start: Nested Routes
  {
    path: 'details/:id',
    children: [
      { path: '', component: DetailsComponent },
      { path: 'actors', component: DetailsActorsComponent },
      { path: 'movies', component: DetailsMoviesComponent },
      { path: 'reviews', component: DetailsReviewsComponent },
    ],
  },
  // End: Nested Routes

  // 404 page for non-existing URLs
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
