"use strict";
import axios from 'axios';


var BookApi = {
	getAllBooks: function (cb) {
		axios.get('http://localhost:3000/book/')
			.then(res => {
				cb(res.data);
			})
	}

	//Add the rest of the  CRUD operation here
};

module.exports = BookApi;