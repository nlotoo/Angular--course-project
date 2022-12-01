import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from '../catalog-page/catalog-page.component';
import { CatalogLazyModule } from './catalogs-routing.module';
import { MaterialModule } from '../../modules/app.material.module';



@NgModule({
  declarations: [
    CatalogPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CatalogLazyModule,
  ]
})
export class CatalogModule { }
