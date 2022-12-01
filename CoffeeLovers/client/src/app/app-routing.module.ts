import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './authorizations/login-component/login-component.component';
import { RegisterComponentComponent } from './authorizations/register-component/register-component.component';
import { HomePageComponent } from './core/home-page/home-page.component'
import { CatalogPageComponent } from './catalogs/catalog-page/catalog-page.component';
import { FavoriteCatalogComponent } from './catalogs/favorite-catalog/favorite-catalog.component';
import { ItemPageComponent } from './profilePages/detail-page/item-page.component';
import { AddItemComponent } from './profilePages/add-item/add-item.component';
import { EditPageComponent } from './profilePages/edit-page/edit-page.component';
import { EditCommentPageComponent } from './app-comment/edit-comment-page/edit-comment-page.component';
import { CommentsPageComponent } from './app-comment/comments-page/comments-page.component';
import { IsAuthGuard } from './guards/is-auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  { path: 'register', component: RegisterComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'catalog',
    loadChildren: () => import('./catalogs/catalog.module').then(m => m.CatalogModule)

  },


  // { path: 'catalog', component: CatalogPageComponent, canActivate: [IsAuthGuard] },
  { path: 'favorite-catalog', component: FavoriteCatalogComponent, canActivate: [IsAuthGuard] },
  { path: 'item/:id', component: ItemPageComponent },
  { path: 'add-item', component: AddItemComponent, canActivate: [IsAuthGuard] },
  { path: 'edit-page/:id', component: EditPageComponent, canActivate: [IsAuthGuard] },
  { path: 'edit-comment-page/:id', component: EditCommentPageComponent },
  { path: 'liked/:id', component: CommentsPageComponent },
  { path: 'dislike/:id', component: CommentsPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
