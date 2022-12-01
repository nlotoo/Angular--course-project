import { RouterModule, Routes } from "@angular/router";
import { FavoriteCatalogComponent } from "../favorite-catalog/favorite-catalog.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FavoriteCatalogComponent,
    }
]


export const FavoriteCatalogLazyModule = RouterModule.forChild(routes)