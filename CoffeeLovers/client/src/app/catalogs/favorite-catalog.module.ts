import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.material.module';
import { FavoriteCatalogLazyModule } from './favotite-catalog-routing.module';
import { FavoriteCatalogComponent } from './favorite-catalog/favorite-catalog.component';



@NgModule({
    declarations: [
        FavoriteCatalogComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FavoriteCatalogLazyModule,

    ]
})
export class FavoriteModule { }