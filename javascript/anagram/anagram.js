var Anagram = function(subject){

	// to compare the identities of arrays
	function isEqual(x,y){
		if (x.length!=y.length)
			return false;
		else {
			for (var i = 0; i < x.length; ++i) {
				if (x[i] !== y[i]) return false;
			}
			return true;
		}
	};

	// to check if word is an anagram
	function isAnagram(word){
		var wordLetters = word.toLowerCase().split('');
		var subjectLetters = subject.toLowerCase().split('');

		if (isEqual(wordLetters, subjectLetters))
			return false
		else
			return isEqual(subjectLetters.sort(), wordLetters.sort())
	};

	// to check which words in the collection are anagrams
	function findAnagrams(collection){
		if (typeof collection === 'string') 
     		 collection = [].slice.apply(arguments);
		return collection.filter(isAnagram)
	};

	return {matches: findAnagrams};
};

module.exports = Anagram;