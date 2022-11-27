import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppStoreFace {
  message: string;

}




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  message$: Observable<string>


  constructor(private store: Store<AppStoreFace>) {
    console.log(this.store)
    this.message$ = this.store.select('message');

  }

    

  spanishMesage() {
    this.store.dispatch({ type: 'Spanish' })
  }

  frenchMessage() {
    this.store.dispatch(({ type: 'French' }))
  }

}
