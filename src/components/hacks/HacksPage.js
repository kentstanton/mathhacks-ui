import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hackActions from '../../actions/hackActions';
import HackList from './HackList';
import {browserHistory} from 'react-router';

class HacksPage extends React.Component {

    // intialize state and call bind functions
    constructor (props, context) {
        super(props, context);
        this.redirectToAddHackPage = this.redirectToAddHackPage.bind(this);
    }


    hackRow(hack, index) {
        return <div key={index}>{hack.title}</div>;     
    }

    redirectToAddHackPage () {
        browserHistory.push('/mathhack');
    }

    // convert to call child components - remove markup
    render() {
        const {hacks} = this.props;
        
        return (
            <div >
                <h1>Hacks</h1>
                <input type="submit"
                    value="Add Hack"
                    className="btn btn-primary"
                    onClick={this.redirectToAddHackPage}
                />
                <HackList hacks={hacks} />

            </div>    
        );
    }

}

// declare proptypes so they can be validated
HacksPage.propTypes = {
    hacks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
};

// redux connect and dispatch functions
function mapStateToProps(state, ownProps) {
    return {
        hacks: state.hacks
    };
}

function mapDipatchToProps(dispatch) {
    return {
        actions: bindActionCreators(hackActions, dispatch)
    };
}

// shortcut for passing return from first function "connect()" to second function
export default connect(mapStateToProps, mapDipatchToProps)(HacksPage);
