import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteCatalogLazyModule } from './favotite-catalog-routing.module';
import { FavoriteCatalogComponent } from '../favorite-catalog/favorite-catalog.component';
import { MaterialModule } from 'src/app/modules/app.material.module';



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