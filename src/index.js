/*eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadHacks} from './actions/hackActions';
import {loadAuthors} from './actions/authorActions';
import {loadPracticeTopics} from './actions/practiceTopicActions';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
<script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';


const store = configureStore();
store.dispatch(loadHacks());
store.dispatch(loadAuthors());
store.dispatch(loadPracticeTopics());


render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
