import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css'],
})
export class DetailsReviewsComponent {
  movieReviews = [
    {
      rate: 7.5,
      review:
        "This is the second item's accordion body. It is hidden by default,until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
      author: 'Author',
      usefulCount: 100,
      totalCount: 120,
    },
    {
      rate: 7.5,
      review:
        "This is the second item's accordion body. It is hidden by default,until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
      author: 'Author',
      usefulCount: 100,
      totalCount: 120,
    },
    {
      rate: 7.5,
      review:
        "This is the second item's accordion body. It is hidden by default,until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.",
      author: 'Author',
      usefulCount: 100,
      totalCount: 120,
    },
  ];
}
