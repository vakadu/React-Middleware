import {
    FETCH_USERS
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type){
        case FETCH_USERS:
            //debugger

            return [...state, ...action.payload.data];
            //return existing users along with new users
    }
    return state;
}
