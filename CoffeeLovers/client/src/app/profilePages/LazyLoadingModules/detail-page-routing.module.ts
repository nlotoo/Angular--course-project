import { RouterModule, Routes } from "@angular/router";
import { ItemPageComponent } from "../detail-page/item-page.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ItemPageComponent,

    }
]

export const DetailPageLazyRoutingModule = RouterModule.forChild(routes);
