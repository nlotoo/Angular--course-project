import { Action } from '@ngrx/store';

export function userReducer(state: string = 'justUserData', action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case 'is-user-loged':
            return state = 'user-data-onsite';
        default:
            return state;
    }


}
