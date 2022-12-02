import { createReducer, on } from '@ngrx/store';
import { userDataFetcher } from '../actions/userData.actions';


interface IUser {
    email: string,
    id: string,
    token: string,
}

export const initialState = 'No user Data';
export const UserState: any = '';


export const userDataReducer = createReducer(
    initialState,
    on(userDataFetcher, (state) => state = 'newUserState'),
    // on(decrement, (state) => state - 1),
    // on(reset, (state) => 0)
);