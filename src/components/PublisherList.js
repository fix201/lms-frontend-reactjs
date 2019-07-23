"use strict"

import React from 'react';
import PropTypes from 'prop-types';

function createPublisherRow(publisher, index) {
    return (
        <tr key={publisher.publisher_id}>
            <td> {index + 1} </td>
            <td> {publisher.publisher_name} </td>
        </tr>
    );
}



export function PublisherList(props) {
    var index = 0;
    return (
        <div>
            <h1>Publishers</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.publisherList.map(createPublisherRow, index)}
                </tbody>
            </table>
        </div>
    );
}

PublisherList.propTypes = {
    publisherList: PropTypes.array.isRequired
};



