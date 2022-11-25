import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCatalogComponent } from './favorite-catalog.component';

describe('FavoriteCatalogComponent', () => {
  let component: FavoriteCatalogComponent;
  let fixture: ComponentFixture<FavoriteCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
