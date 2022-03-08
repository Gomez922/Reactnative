import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

       case ActionTypes.ADD_COMMENT:
           const c = action.payload;
           c.id = state.comments.length;
           return {...state, errMess:null, comments: state.comments.concat(c)};

        default:
            return state;
    }
};

//state.comments.concat(comment)
//return {...state, comments: state.comments.concat(c)}