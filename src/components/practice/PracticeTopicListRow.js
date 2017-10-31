import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PracticeTopicListRow = ({practiceTopic}) => {
    return (
        <tr>
            <td><a href={practiceTopic.sourePage} target="_blank">Watch</a></td>
            <td><Link to={'/mathhack/' + practiceTopic.id} >{practiceTopic.title}</Link></td>
            <td>{practiceTopic.authorId}</td>
            <td>{practiceTopic.category}</td>
            <td>{practiceTopic.length}</td>
    </tr>
    );
};


PracticeTopicListRow.propTypes = {
    practiceTopic: PropTypes.object.isRequired
};


export default PracticeTopicListRow;