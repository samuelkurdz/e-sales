import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  // templateUrl: './star-rating.component.html',
  template: `
    <div class="rating text-md" #starRate [attr.data-rating]="currentRating" (mouseout)="setRating()">
    <ng-container *ngFor="let star of currentRating">
      <span class="star cursor-pointer" [attr.data-value]="star + 1" (mouseover)="hoverHandler($event)">
        &#9733;
      </span>
    </ng-container>
  </div>
  `,
  // styleUrls: ['./star-rating.component.scss]
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;

  @ViewChild('starRate') starRate: ElementRef;
  currentRating = [...Array(5).keys()];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.setRating();
  }

  setRating() {
    const starRatingParentElement = this.starRate.nativeElement;
    const stars: HTMLElement[] = starRatingParentElement.getElementsByClassName('star');
    Array.from(stars).forEach(star => {
      star.style.color = this.rating >= +star.dataset.value ? 'yellow' : 'gray';
    });
  };

  hoverHandler = (event) => {
    const starRatingParentElement = this.starRate.nativeElement;
    const stars: HTMLElement[] = starRatingParentElement.getElementsByClassName('star');
    const hoverValue = event.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= +star.dataset.value ? 'yellow' : 'gray';
    });
  };

}
