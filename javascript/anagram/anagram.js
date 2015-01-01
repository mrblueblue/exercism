var Anagram = function(word){

	function sorted(str){
		return str.toLowerCase().split('').sort().join('')
	}

	function isAnagram(possibleMatch){
		var sortedWord = sorted(word),
			sortedPossibleMatch = sorted(possibleMatch);

		return sortedWord === sortedPossibleMatch && word.toLowerCase() !== possibleMatch.toLowerCase();
	};

	function findAnagrams(collection){
		if (typeof collection === 'string')
     		 collection = [].slice.apply(arguments);
		return collection.filter(isAnagram)
	};

	return {matches: findAnagrams};
};

module.exports = Anagram;