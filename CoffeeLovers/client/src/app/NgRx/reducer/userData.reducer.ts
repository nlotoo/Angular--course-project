import { createReducer, on } from '@ngrx/store';
import { userDataFetcher, userInfo } from '../actions/userData.actions';

interface IUser {
    email: string,
    id: string,
    token: string,
}
let userInfoExtarnal: any = ''

export function extarnalUserData(userData: any): void {
    console.log(userData);


    userInfoExtarnal = userData

    return userInfoExtarnal

}

console.log(userInfoExtarnal)

export const initialState = 'No user Data';
export const UserState: any = '';



export const userDataReducer = createReducer(
    initialState,
    on(userDataFetcher, (state) => state = 'newUserState'),
    on(userInfo, (state) => state = userInfoExtarnal),

);