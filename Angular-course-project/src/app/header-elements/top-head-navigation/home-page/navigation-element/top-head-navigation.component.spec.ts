import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadNavigationComponent } from './top-head-navigation.component';

describe('TopHeadNavigationComponent', () => {
  let component: TopHeadNavigationComponent;
  let fixture: ComponentFixture<TopHeadNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopHeadNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHeadNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
