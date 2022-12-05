import { Action } from '@ngrx/store';
import { ShoppingItem } from '../shoping-item';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    DELETE_All_ITEM = '[SHOPPING] Delete All Item',
    UPDATE_ITEM = '[SHOPPING] Update Item'
}

// Add
export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem) { }
}

export type ShoppingAction = AddItemAction 