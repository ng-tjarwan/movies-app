import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchMovieTitle = '';
  public loggedInUser: any;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    if (this.auth.user$) {
      this.auth.user$.subscribe((data) => {
        console.log('loggedInUser', data);
        this.loggedInUser = data;
      });
    }
  }
}
