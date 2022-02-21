import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input() imgUrls: string[] = [];

  currentImgIndex: number = 0

  constructor() { }

  updateImgIndexValueByNumber(number: number) {
    this.currentImgIndex += number;
  }
}
