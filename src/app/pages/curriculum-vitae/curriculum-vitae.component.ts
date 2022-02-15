import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent {

  public openedSectionState: Map<string,boolean> =
    new Map(
      Object.entries({
        'work-experience': false,
        'education': false,
      })
    );

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  removeHeightLimit(id: string) {
    const node = this.document.getElementById(id) as HTMLElement|undefined;
    if (!node) return;
    node.classList.add('max-h-full');
    node.classList.remove('max-h-96');
    this.openedSectionState.set(id, true);
  }

  addHeightLimit(id: string) {
    const node = this.document.getElementById(id) as HTMLElement|undefined;
    if (!node) return;
    node.classList.remove('max-h-full');
    node.classList.add('max-h-96');
    this.openedSectionState.set(id, false);
  }

}
