var SpaceAge = function(number) {

	this.seconds = number;

	this.onEarth = function() {
		return +(number * .00000003168886215).toFixed(2);
	}

	this.onMercury = function() {
		return +(number * .000000131569845).toFixed(2);
	}

	this.onVenus = function() {
		return +(number * .0000000515171115).toFixed(2);
	}

	this.onMars = function() {
		return +(number * .0000000168464245).toFixed(2);
	}

	this.onJupiter = function() {
		return +(number * .00000000267220658).toFixed(2);
	}

	this.onSaturn = function() {
		return +(number * .00000000107666667).toFixed(2);
	}

	this.onUranus = function() {
		return +(number * .00000000037693254).toFixed(2);
	}

	this.onNeptune = function() {
		return +(number * .00000000019244534).toFixed(2);
	}

};

module.exports=SpaceAge;