"use strict"

import React from 'react';
import PropTypes from 'prop-types';
import PublisherActions from '../actions/PublisherActions';
import {PublisherList} from './PublisherList';

export class Publishers extends React.Component{

    UNSAFE_componentWillMount(){
        PublisherActions.readPublishers();
    }

    render() {
        return(
            <div>
                <PublisherList publisherList = {this.props.publisherList} />
            </div>
        );
    }
}

Publishers.propTypes = {
    publisherList: PropTypes.array.isRequired
};
