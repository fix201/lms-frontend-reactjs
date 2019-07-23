"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import BookActions from '../actions/BookActions';
import {BookList} from './BookList';

export class Books extends React.Component{

    UNSAFE_componentWillMount(){
        BookActions.readBooks();
    }

    render() {
        return(
            <div>
                <BookList bookList = {this.props.bookList} />
            </div>
        );
    }
}

Books.propTypes = {
    bookList: PropTypes.array.isRequired
};
