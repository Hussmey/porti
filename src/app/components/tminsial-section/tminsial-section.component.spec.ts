import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TminsialSectionComponent } from './tminsial-section.component';

describe('TminsialSectionComponent', () => {
  let component: TminsialSectionComponent;
  let fixture: ComponentFixture<TminsialSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TminsialSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TminsialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
