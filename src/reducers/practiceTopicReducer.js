import * as types from '../actions/actionTypes';
import inititalState from './initialState';



export default function practiceTopicReducer(state=inititalState.practiceTopics, action) {
    switch(action.type) {
        case types.LOAD_PRACTICETOPICS_SUCCESS:
            return action.practiceTopics;
        case types.CREATE_PRACTICETOPICS_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.practiceTopic)
            ];
            case types.UPDATE_PRACTICETOPICS_SUCCESS:
            return [
                ...state.filter(practiceTopic => practiceTopic.id !== action.practiceTopic.id),
                Object.assign({}, action.practiceTopic)
            ];

            default:
            return state;
    }
}
