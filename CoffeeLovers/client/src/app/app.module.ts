import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './core/navbar/navbar.component';
import { RegisterComponentComponent } from './authorizations/register-component/register-component.component';
import { LoginComponentComponent } from './authorizations/login-component/login-component.component';
import { HomePageComponent } from './core/home-page/home-page.component';

import { ReactiveFormsModule } from '@angular/forms';



// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from '../environments/environment';
// import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { CatalogPageComponent } from './core/catalog-page/catalog-page.component';
import { ItemPageComponent } from './profilePages/detail-page/item-page.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddItemComponent } from './profilePages/add-item/add-item.component';
import { EditPageComponent } from './profilePages/edit-page/edit-page.component';
import { CommentsPageComponent } from './profilePages/comments-page/comments-page.component';
import { CommentsActiveBubbleComponent } from './profilePages/comments-active-bubble/comments-active-bubble.component';
import { EditCommentPageComponent } from './profilePages/edit-comment-page/edit-comment-page.component';
import { IsAuthGuard } from './guards/is-auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponentComponent,
    LoginComponentComponent,
    HomePageComponent,
    CatalogPageComponent,
    ItemPageComponent,
    AddItemComponent,
    EditPageComponent,
    CommentsPageComponent,
    CommentsActiveBubbleComponent,
    EditCommentPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    HttpClientModule,

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireAnalyticsModule,
    // AngularFireModule.initializeApp(environment.firebase, 'projectWash')
  ],
  providers: [IsAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
