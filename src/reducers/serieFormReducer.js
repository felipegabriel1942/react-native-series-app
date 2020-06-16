import { SET_FIELD } from '../actions/_index';

const INITIAL_STATE = {
    title: '',
    gender: 'drama',
    rate: 0,
    img: '',
    description: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const newState = {...state}
            newState[action.field] = action.value;
            return newState;
        default:
            return state;
    }    
} 