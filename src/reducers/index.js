import {combineReducers} from 'redux';
import hacks from './hackReducer';
import authors from './authorReducer';
import practiceTopics from './practiceTopicReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers( {
        hacks,
        authors,
        practiceTopics,
        ajaxCallsInProgress
});

export default rootReducer;
