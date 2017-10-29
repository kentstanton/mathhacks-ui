import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const HackListRow = ({hack}) => {
    return (
        <tr>
            <td><a href={hack.sourePage} target="_blank">Watch</a></td>
            <td><Link to={'/mathhack/' + hack.id} >{hack.title}</Link></td>
            <td>{hack.authorId}</td>
            <td>{hack.category}</td>
            <td>{hack.length}</td>
    </tr>
    );
};


HackListRow.propTypes = {
    hack: PropTypes.object.isRequired
};


export default HackListRow;