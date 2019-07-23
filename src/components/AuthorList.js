"use strict"

import React from 'react';
import PropTypes from 'prop-types';


function createAuthorRow(author, index) {
    return (
        <tr key={author.author_id}>
            <td> {index + 1} </td>
            <td> {author.first_name} </td>
            <td> {author.last_name} </td>
            <button>update</button>
            <button>delete</button>
        </tr>
    );
}

export function AuthorList(props) {
    var index = 0;
    return (
        <div>
            <h1>Authors</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authorList.map(createAuthorRow, index)}
                    <button>add</button>
                </tbody>
            </table>
        </div>
    );
}

AuthorList.propTypes = {
    authorList: PropTypes.array.isRequired
};



