import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as practiceTopicActions from '../../actions/practiceTopicActions';
import PracticeTopicsList from './PracticeTopicsList';
import {browserHistory} from 'react-router';

class PracticeTopicsPage extends React.Component {

    // intialize state and call bind functions
    constructor (props, context) {
        super(props, context);
        //this.redirectToAddHackPage = this.redirectToAddHackPage.bind(this);
    }


    practiceTopicRow(practiceTopic, index) {
        return <div key={index}>{practiceTopic.title}</div>;     
    }

    //redirectToAddHackPage () {
    //    browserHistory.push('/mathhack');
    //}

    // convert to call child components - remove markup
    render() {
        const {practiceTopics} = this.props;
        
        return (
            <div>
                <h1>PracticeTopics</h1>
                <input type="submit"
                    value="Add Topic"
                    className="btn btn-primary"
                    onClick={this.redirectToAddTopicPage}
                />
                <PracticeTopicsList practiceTopics={practiceTopics} />

            </div>    
        );
    }

}

// declare proptypes so they can be validated
PracticeTopicsPage.propTypes = {
    practiceTopics: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
};

// redux connect and dispatch functions
function mapStateToProps(state, ownProps) {
    return {
        practiceTopics: state.practiceTopics
    };
}

function mapDipatchToProps(dispatch) {
    return {
        actions: bindActionCreators(practiceTopicActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDipatchToProps)(PracticeTopicsPage);
