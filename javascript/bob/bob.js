var Bob = function() {

	function shouting(words) {
		var words = words.match(/[a-zA-Z\u00F0-\u02AF]+/g); 
		function isUpperCase(words) {
			return words.valueOf().toUpperCase() === words.valueOf();
		}

    	return words ? words.reduce(function(prev, curr){
        	return prev && isUpperCase(curr);
    	}, true) : false; 
	}

	function silence(words) {`
   		return words.trim() === '';
	}

	function question(words) {
   		return words.slice(-1) === '?';
	}

	function forceful(words) {
    	return /\w+\!/.test(words);
	}

	this.hey = function(speech) {
		//Silent Bob
		if (silence(speech))
			return "Fine. Be that way!";
			//Bob says something
		else { 
			if (shouting(speech)) 
				return 'Whoa, chill out!';
			else if (question(speech)) 
				return 'Sure.';
			else if (forceful(speech))
				return 'Whatever.';
			else 
				return 'Whatever.';
		}
	}

};

module.exports = Bob;
