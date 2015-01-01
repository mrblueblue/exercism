var Robot = function() {

	function generateName() {

		function randomLetter() {
			return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
		}

		function randomNumber() {
			return Math.floor(Math.random() * 10);
		}

		var name = randomLetter() + randomLetter() + randomNumber() + randomNumber() + randomNumber()

		return name;
	}

	var name = generateName();

	this.name = name;
	this.reset = function() {
		this.name = generateName();
	};
};

module.exports=Robot;





