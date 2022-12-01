import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/app.material.module';


import { ItemPageComponent } from '../detail-page/item-page.component';
import { DetailPageLazyRoutingModule } from './detail-page-routing.module';
import { CommentsPageComponent } from 'src/app/app-comment/comments-page/comments-page.component';
import { CommentsActiveBubbleComponent } from 'src/app/app-comment/comments-active-bubble/comments-active-bubble.component';



@NgModule({
  declarations: [
    ItemPageComponent,
    CommentsActiveBubbleComponent,
    CommentsPageComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    DetailPageLazyRoutingModule,

  ]
})
export class DetailPageModule { }
