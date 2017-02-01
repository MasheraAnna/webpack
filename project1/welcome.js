'use strict';

module.exports = function(message){
	
	if (NODE_ENV == 'developement'){
		console.log("hello");
	}
	
	alert (`Welcome ${message}`);
};
