import {combineReducers} from 'redux';
import hacks from './hackReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers( {
        hacks,
        authors,
        ajaxCallsInProgress
});

export default rootReducer;
