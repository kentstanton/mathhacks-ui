import React, {PropTypes} from 'react';
import PracticeTopicListRow from './PracticeTopicListRow';

const PracticeTopicList = ({practiceTopics}) => {
    return (
        <table className="table">
        <thead>
        <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
        </tr>
        </thead>
        <tbody>
            {practiceTopics.map(practiceTopic =><PracticeTopicListRow key={practiceTopic.id} practiceTopic={practiceTopic} />)}
        </tbody>
        </table>
    );
};

PracticeTopicList.propTypes = {
    practiceTopics: PropTypes.array.isRequired
};

export default PracticeTopicList;