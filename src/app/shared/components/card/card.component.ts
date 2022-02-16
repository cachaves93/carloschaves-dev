import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() headerText?: string;
  @Input() subHeader?: string;
  @Input() hasHeaderSeparator: boolean = true;
  @Input() imgSrc?: string;
  @Input() imgCarouselUrls?: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
