var Triangle = function(a, b, c){

	var allSidesEqual = a === b && b === c,
		twoSidesEqual = a === b || b === c || a === c,
		noSidesEqual = a !== b && b !== c && a !== c,
		missingSide = a === 0 || b === 0 || a === 0,
		impossibleTriangle = a < 0 || b < 0 || c < 0 || a + b <= c || b + c <= a || c + a <= b;

	this.kind = function() {
		if (missingSide || impossibleTriangle) {
			throw new Error('that does not seem like a triangle');
		}
		else if (allSidesEqual) {
			return "equilateral";
		}
		else if (twoSidesEqual) {
			return "isosceles";
		}
		else if (noSidesEqual) {
			return "scalene";
		}
	};

};

module.exports=Triangle;