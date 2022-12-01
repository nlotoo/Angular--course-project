import { Action } from '@ngrx/store';

export function SimpleReducer(state: string = 'Hello World', action: Action) {
    console.log(action.type, state);
    

    switch (action.type) {
        case 'Spanish':
            return state = 'Holla Mundo';

        case 'French':
            return state = 'Bonjour le monde';
        default:
            return state;
    }
}
