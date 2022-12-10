import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NgRx
import { StoreModule } from '@ngrx/store';

import { counterReducer } from '../app/NgRx/reducer/counter.reducer';


import { MaterialModule } from './modules/app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './core/navbar/navbar.component';
import { RegisterComponentComponent } from './authorizations/register-component/register-component.component';
import { LoginComponentComponent } from './authorizations/login-component/login-component.component';
import { HomePageComponent } from './core/home-page/home-page.component';

import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './profilePages/add-item/add-item.component';
import { EditPageComponent } from './profilePages/edit-page/edit-page.component';
import { EditCommentPageComponent } from './app-comment/edit-comment-page/edit-comment-page.component';
import { IsAuthGuard } from './guards/is-auth.guard';
import { userDataReducer } from './NgRx/reducer/userData.reducer';
import { NotFoundPageComponent } from './additional-pages/not-found-page/not-found-page.component';
import { AboutComponent } from './additional-pages/about-page/about/about.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    HomePageComponent,
    AddItemComponent,
    EditPageComponent,
    EditCommentPageComponent,
    NotFoundPageComponent,
    AboutComponent,

    // CommentsPageComponent, lazyloading
    // CommentsActiveBubbleComponent, lazyloading
    // ItemPageComponent, lazyloading
    // CatalogPageComponent, lazyloading
    // FavoriteCatalogComponent, Lazyloadig


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        user: userDataReducer,
        count: counterReducer,
      },
    ),




  ],
  providers: [IsAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
