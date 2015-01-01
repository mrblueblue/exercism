
var Beer = {

	refrain: "X bottles of beer on the wall, X bottles of beer.\nTake one down and pass it around, Y bottles of beer on the wall.\n",
	penult: "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n",
	last: "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n",
	end: "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n",

	verse: function(number){
		if (number === 2)
			return Beer.penult;
		else if (number === 1) 
			return Beer.last;
		else if (number === 0)
			return Beer.end;
		else 
			return Beer.refrain.replace(/[X]/g,number).replace(/[Y]/g,number-1);
	},

	sing: function(start, end){
		var end = end || 0
		var verses = []
		for (var i = start; i >= end; i--){
			verses.push(Beer.verse(i));
		}
		return verses.join("\n")
	}

};

module.exports = Beer;