import { Action } from '@ngrx/store';

export function userReducer(state: string = 'justUserData', action: Action) {

    switch (action.type) {
        case 'in action':
            return state = 'user-data-onsite';
        default:
            return state;
    }


}
