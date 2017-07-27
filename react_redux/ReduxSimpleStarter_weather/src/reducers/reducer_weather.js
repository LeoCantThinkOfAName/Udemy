import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log(action);

    switch(action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state];
            // equal to state.concat([action.payload.data]);
    }
    return state;
}