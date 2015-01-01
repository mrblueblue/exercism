var transform = function(collection) {

	var transformed = {};

	for (key in collection) {
		collection[key].forEach( function (element) {
			transformed[element.toLowerCase()] = +key;
		});
	}

	return transformed;

};

module.exports=transform;