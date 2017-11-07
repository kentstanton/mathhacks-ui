import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import HacksPage from './components/hacks/HacksPage';
import ManageHackPage from './components/hacks/ManageHackPage';
import GettingStartedPage from './components/help/GettingStartedPage';
import PracticeTopicsPage from './components/practice/PracticeTopicsPage';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="hacks" component={HacksPage} />
        <Route path="mathhack" component={ManageHackPage} />
        <Route path="mathhack/:id" component={ManageHackPage} />
        <Route path="about" component={AboutPage} />
        <Route path="getting-started" component={GettingStartedPage} />
        <Route path="practice-home" component={PracticeTopicsPage} />

 

    </Route>

);
