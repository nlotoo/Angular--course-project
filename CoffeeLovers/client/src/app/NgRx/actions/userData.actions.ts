import { createAction, props } from '@ngrx/store';


export const userDataFetcher = createAction('[Home-component] extarnalData', props<{ user: string, itemId: string }>);
export const userInfo = createAction('userInfo');