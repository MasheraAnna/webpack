'use strict';

module.exports = function(message){
	
	if (NODE_ENV == 'development'){
		console.log("hello");
	}
	
	alert (`Welcome ${message}`);
};
