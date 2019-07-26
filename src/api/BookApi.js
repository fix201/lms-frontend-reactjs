"use strict";
import axios from 'axios';
import Config from '../config';


var BookApi = {
	getAllBooks: function (cb) {
		axios.get(Config.api + '/book/')
			.then(res => {
				cb(res.data);
			})
	},

	updateBook: (book, cb) => {
		axios.patch(Config.api + '/book/', book)
		.then(res => {
			cb(res.data);
		})
	},

	deleteBook: (bookId, cb) => {
		axios.delete(Config.api + '/book/' + bookId)
			.then(res => {
				cb(res.data);
			})
	},

	addBook: (book, cb) => {
		axios.post(Config.api+'/book/',book).then(res => {
			cb(res.data);
		})
	}


	//Add the rest of the  CRUD operation here
};

module.exports = BookApi;