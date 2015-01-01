var score = function(word) {

	var totalPoints = 0;
		letters = word? word.split('') : []
		letterValues = {
			1: "AEIOULNRST".split(''),
			2: "DG".split(''),
			3: "BCMP".split(''),
			4: "FHVWY".split(''),
			5: "K".split(''),
			8: "JX".split(''),
			10: "QZ".split('')
		};

	letters.forEach( function (letter) {
    	for (key in letterValues) {
	        if (letterValues[key].indexOf(letter.toUpperCase()) !== -1 ){
	            totalPoints = totalPoints + parseInt(key);
	        }
    	}
	});
	
return totalPoints
};

module.exports=score;