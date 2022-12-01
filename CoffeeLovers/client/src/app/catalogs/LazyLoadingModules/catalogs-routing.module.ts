import { RouterModule, Routes } from "@angular/router";
import { CatalogPageComponent } from "../catalog-page/catalog-page.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CatalogPageComponent,
    }
]


export const CatalogLazyModule = RouterModule.forChild(routes)