import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { FavoriteCatalogComponent } from './favorite-catalog/favorite-catalog.component';
import { CatalogLazyModule } from './catalogs-routing.module';



@NgModule({
  declarations: [
    CatalogPageComponent,
  ],
  imports: [
    CommonModule,
    CatalogLazyModule,
  ]
})
export class CatalogModule { }
