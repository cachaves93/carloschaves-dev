import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPointsComponent } from './skill-points.component';

describe('SkillPointsComponent', () => {
  let component: SkillPointsComponent;
  let fixture: ComponentFixture<SkillPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
