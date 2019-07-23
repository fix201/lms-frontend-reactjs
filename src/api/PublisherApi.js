"use strict";
import axios from 'axios';


var PublisherApi = {
	getAllPublishers: function (cb) {
		axios.get('http://localhost:3000/publisher/')
			.then(res => {
				cb(res.data);
			})
	}

	//Add the rest of the  CRUD operation here
};

module.exports = PublisherApi;