"use strict";
import axios from 'axios';
import Config from '../config';

var AuthorApi = {
	getAllAuthors: function (cb) {
		axios.get(Config.api + '/author/')
			.then(res => {
				cb(res.data);
			})
	},

	updateAuthor: (authorId) => {
		axios.patch(Config.api + '/author/' + authorId)
	},

	deleteAuthor: (authorId, cb) => {
		axios.delete(Config.api + '/author/' + authorId)
			.then(res => {
				cb(res.data);
			})
	}

	//Add the rest of the  CRUD operation here
};

module.exports = AuthorApi;