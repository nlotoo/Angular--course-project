
import { Action } from '@ngrx/store';


export function UserReducer(state: string = 'userMsg', action: Action) {

    console.log(action.type, state)

    
    return state='User is here';

}