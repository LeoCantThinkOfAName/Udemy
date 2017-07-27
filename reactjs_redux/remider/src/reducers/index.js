import { ADD_REMIDER, DELETE_REMIDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const remider = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = [], id) => {
    const remiders = state.filter(remider => remider.id !== id);

    console.log('new reduced remiders', remiders);
    return remiders;
}

const remiders = (state= [], action) => {
    let remiders = null;
    state = read_cookie('remiders');

    switch(action.type) {
        case ADD_REMIDER:
            remiders = [...state, remider(action)];
            bake_cookie('remiders', remiders);
            console.log('remiders', remiders);
            return remiders
        case DELETE_REMIDER:
            remiders = removeById(state, action.id);
            bake_cookie('remiders', remiders);
            return remiders;
        case CLEAR_REMINDERS:
            remiders = [];
            bake_cookie('remiders', remiders);
            return remiders;

        default:
            return state;
    }
}

export default remiders;