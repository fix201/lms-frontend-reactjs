"use strict";
import axios from 'axios';
import Config from '../config';


var PublisherApi = {
	getAllPublishers: function (cb) {
		axios.get('http://localhost:3000/publisher/')
			.then(res => {
				cb(res.data);
			})
	},

	updatePublisher: (publisher, cb) => {
		axios.patch(Config.api + '/publisher/', publisher)
		.then(res => {
			cb(res.data);
		})
	},

	deletePublisher: (publisherId, cb) => {
		axios.delete(Config.api + '/publisher/' + publisherId)
			.then(res => {
				cb(res.data);
			})
	},

	addPublisher: (publisher, cb) => {
		axios.post(Config.api+'/publisher/',publisher).then(res => {
			cb(res.data);
		})
	}


	//Add the rest of the  CRUD operation here
};

module.exports = PublisherApi;