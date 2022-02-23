import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input() imgUrls: string[] = [];

  public isLoadingImg: boolean = true;
  public canTriggerLoading: boolean = true;

  currentImgIndex: number = 0

  constructor() { }

  updateImgIndexValueByNumber(number: number) {
    this.currentImgIndex += number;
    setTimeout(() => { if (this.canTriggerLoading) this.isLoadingImg = true }, 200);
  }

  toggleLoading(bool: boolean): void {
    this.canTriggerLoading = bool;
    this.isLoadingImg = bool;
  }
}
