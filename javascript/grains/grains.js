var Grains = function() {

	var totalSquares = 64;

	this.square = function(square) {
		return Math.pow(2, square-1);
	}

	this.total = function() {
		var total = 0;
		for (var i = 1; i <= totalSquares; i ++) {
			total = total + this.square(i);
		}
		return total;
	}
};

module.exports=Grains;