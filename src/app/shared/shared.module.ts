import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SkillPointsComponent } from './components/skill-points/skill-points.component';

@NgModule({
  declarations: [
    CardComponent,
    SkillPointsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    SkillPointsComponent,
  ]
})
export class SharedModule { }
