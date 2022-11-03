import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadNavigationComponent } from './header-elements/top-head-navigation/top-head-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
