import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpToUpComponent } from './up-to-up.component';

describe('UpToUpComponent', () => {
  let component: UpToUpComponent;
  let fixture: ComponentFixture<UpToUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpToUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpToUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
