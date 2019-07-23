"use strict";
import axios from 'axios';
import Config from '../config';

var AuthorApi = {
	getAllAuthors: function (cb) {
		axios.get(Config.api + '/author/')
			.then(res => {
				cb(res.data);
			})
	}

	//Add the rest of the  CRUD operation here
};

module.exports = AuthorApi;