import { Component, } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { increment, decrement, reset } from '../../NgRx/actions/counter.actions'
import { userDataFetcher } from '../../NgRx/actions/userData.actions'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  count$: Observable<number>
  user$: any

  constructor(
    private store: Store<{ count: number }>,
    private store2: Store<{ user: string }>,

  ) {
    this.count$ = store.select('count')
    this.user$ = store2.select('user') // (state)=> console.log(state);
  }

  getUserData() {

    this.store2.dispatch(userDataFetcher())
  }


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }


}
