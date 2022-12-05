import { Component, } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from 'src/app/NgRx/actions/shopping.actions';
import { AppState } from 'src/app/NgRx/app-state';

import { increment, decrement, reset } from '../../NgRx/actions/counter.actions'
import { userDataFetcher, userInfo } from '../../NgRx/actions/userData.actions'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  count$: Observable<number>
  user$: any
  obj: object = {
    user: "Ivan",
    itemId: '123',
  }

  constructor(
    private store: Store<{ count: number }>,
    private store2: Store,
    private store3: Store,

  ) {
    this.count$ = store.select('count')
    // this.user$ = store2.select('user') // (state)=> console.log(state);
  }



  getUserData() {
    this.store2.dispatch(userInfo());
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
