import * as types from './actionTypes';
import PracticeTopicsApi from '../api/mockPracticeTopicsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPracticeTopicsSuccess(practiceTopics) {
    return {
        type: types.LOAD_PRACTICETOPICS_SUCCESS,
        practiceTopics
    };
}

export function createPracticeTopicSuccess(practiceTopic) {
    return {type: types.CREATE_PRACTICETOPICS_SUCCESS, practiceTopic};
}

export function updatePracticeTopicSuccess(practiceTopic) {
    return {type: types.UPDATE_PRACTICETOPICS_SUCCESS, practiceTopic};
}

export function loadPracticeTopics() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return PracticeTopicsApi.getAllPracticeTopics().then(practiceTopics => {
            dispatch(loadPracticeTopicsSuccess(practiceTopics));
        }).catch(error => {
            throw(error);
        });
    };
}

/*
export function saveHack(hack) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());

        return hackApi.saveHack(hack).then( savedHack => {
            hack.id ? dispatch(updateHackSuccess(savedHack)) :
                dispatch(createHackSuccess(savedHack));
        }).catch( function error(err)  {
            dispatch(ajaxCallError(error));
            throw(err);
        });
    };
}
*/
