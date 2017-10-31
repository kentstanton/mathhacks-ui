import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
    return (
        <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary bg-primary-override mb-3">
            <IndexLink to="/" activeClassName="active">MathHacks</IndexLink>
            {" | "}
            <Link to="/practice-home" activeClassName="active">Practice</Link>
            {" | "}
            <Link to="/hacks" activeClassName="active">Hacks</Link>
            {" | "}
            <Link to="/getting-started" activeClassName="active">Getting Started</Link>
            {" | "}
            <Link to="/about" activeClassName="active">Sam</Link>
            {" | "}                        
            <Link to="/about" activeClassName="active">About</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
            <span className="neonRight">MathHacks: Hack Your Brain</span>

        </nav>
        </div>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
