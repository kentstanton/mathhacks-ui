import React, {PropTypes} from 'react';
import HackListRow from './HackListRow';

const HackList = ({hacks}) => {
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
            {hacks.map(hack =><HackListRow key={hack.id} hack={hack} />)}
        </tbody>
        </table>
    );
};

HackList.propTypes = {
    hacks: PropTypes.array.isRequired
};

export default HackList;