import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadNavigationComponent } from './header-elements/top-head-navigation/home-page/navigation-element/top-head-navigation.component'
import { HomePageComponent } from './header-elements/top-head-navigation/home-page/home-page/home-page.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { StorePageComponent } from './header-elements/main/store-page/store-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopHeadNavigationComponent,
    StorePageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
