var words = function(str) {

	var count = Object.create(null)

	str.split(/\s+/).forEach(function(word){

		// I'm still learning JS, so maybe there is a better way to write the conditional
		if (count[word] === undefined)
			count[word] = 1;
		else
			count[word]++;
	})

	return count;

};

module.exports = words;