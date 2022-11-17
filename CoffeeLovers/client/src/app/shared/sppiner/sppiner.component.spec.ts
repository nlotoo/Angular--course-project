import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppinerComponent } from './sppiner.component';

describe('SppinerComponent', () => {
  let component: SppinerComponent;
  let fixture: ComponentFixture<SppinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
