import * as types from '../actions/actionTypes';
import inititalState from './initialState';



export default function hackReducer(state=inititalState.hacks, action) {
    switch(action.type) {
        case types.LOAD_HACKS_SUCCESS:
            return action.hacks;
        case types.CREATE_HACK_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.hack)
            ];
            case types.UPDATE_HACK_SUCCESS:
            return [
                ...state.filter(hack => hack.id !== action.hack.id),
                Object.assign({}, action.hack)
            ];

            default:
            return state;
    }
}