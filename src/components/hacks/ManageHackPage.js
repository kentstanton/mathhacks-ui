import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as hackActions from '../../actions/hackActions';
import HackForm from './HackForm';
import toastr from 'toastr';


class ManageHackPage extends React.Component {
    constructor (props, context) {
        super(props, context);

        this.state = {
            hack: Object.assign({}, this.props.hack),
            errors: {},
            saving: false
        };

        this.updateHackState = this.updateHackState.bind(this);
        this.saveHack = this.saveHack.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.hack.id != nextProps.hack.id) {
            this.setState({hack: Object.assign({}, nextProps.hack)});
        }
    }


    updateHackState(event) {
        const field = event.target.name;
        let hack = this.state.hack;
        hack[field] = event.target.value;
        return this.setState({hack: hack});
    }
        
    saveHack(event) {
        event.preventDefault();
        this.setState({saving: true});
        
        this.props.actions.saveHack(this.state.hack)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Hack saved');
        this.context.router.push('/hacks');
    }

    render() {
        return (
            <HackForm
                allAuthors={this.props.authors}
                onChange={this.updateHackState}
                onSave={this.saveHack}
                hack={this.state.hack}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }

}


ManageHackPage.propTypes = {
    hack: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageHackPage.contextTypes = {
    router: PropTypes.object
};

function getHackById(hacks, id) {
    const hack = hacks.filter( hack => hack.id == id);
    if (hack.length) {
        return hack[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const hackId = ownProps.params.id;
    let hack = {id: '', sourcePage: '', title: '', authorId: '', length: '', category: ''};

    if (hackId && state.hacks.length > 0) {
        hack = getHackById(state.hacks, hackId);
    }

    const authorsFormattedForDropdown = state.authors.map( author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    
    return {
        hack: hack,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(hackActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageHackPage);