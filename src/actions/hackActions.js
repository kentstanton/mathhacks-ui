import * as types from './actionTypes';
import hackApi from '../api/mockHackApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadHacksSuccess(hacks) {
    return {
        type: types.LOAD_HACKS_SUCCESS, 
        hacks
    };
}

export function createHackSuccess(hack) {
    return {type: types.CREATE_HACK_SUCCESS, hack};
}

export function updateHackSuccess(hack) {
    return {type: types.UPDATE_HACK_SUCCESS, hack};
}

export function loadHacks() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return hackApi.getAllHacks().then(hacks => {
            dispatch(loadHacksSuccess(hacks));    
        }).catch(error => {
            throw(error);
        });
    };
}

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