import { ADD_REMIDER, DELETE_REMIDER, CLEAR_REMINDERS } from '../constants';
export const addRemider = (text, dueDate) => {
    const action = {
        type: ADD_REMIDER,
        text,
        dueDate
    }

    console.log(action)
    return action;
}

export const deleteRemider = (id) => {
    const action = {
        type: DELETE_REMIDER,
        id
    }

    console.log('delete in action', action);
    return action;
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}