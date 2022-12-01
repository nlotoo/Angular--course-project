import * as PostActions from './post.actions';
import { Post } from '../interfaces/Ipost';



export type Action = PostActions.All;


//default app state
const defaultState: Post = {
    text: "Hello i am default state",
    likes: 0,
}

// Helper function to create new state object
const newState = (state: any, newData: any) => {
    return Object.assign({}, state, newData)
}

/// Redure function

export function postReducer(state: Post = defaultState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { Text: action.payload })

        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 })
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1 })

        case PostActions.RESET:
            return defaultState;

    }

}