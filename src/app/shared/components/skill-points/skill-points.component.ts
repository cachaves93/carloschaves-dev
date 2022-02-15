import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-skill-points',
  templateUrl: './skill-points.component.html',
  styleUrls: ['./skill-points.component.css']
})
export class SkillPointsComponent implements AfterViewInit {

  @Input() totalSkillPoints: number = 0;
  @Input() currentSkillPoints: number = 0;

  @ViewChild('container') skillPointsContainer: ElementRef|undefined;
  @ViewChildren('skillPoint') skillPoints!: QueryList<ElementRef>

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
  ) { }

    ngAfterViewInit(): void {
      this.buildSkillPoints();
    }

    public buildSkillPoints(): void {
      if (!this.skillPointsContainer) return;
      const offsetWidth = this.skillPointsContainer.nativeElement.offsetWidth;
      const skillPointWidth = offsetWidth/this.totalSkillPoints;
      this.skillPoints.forEach(
        elementRef =>
          elementRef.nativeElement.style['min-width'] = `${skillPointWidth-4}px`
      );
    }

}
