
function PhoneNumber(dirtyNumber) {

	var numbers = numerize(dirtyNumber);
		cleanNumber = validate(numbers);
	 	areaCode = cleanNumber.substr(0,3);
	 	prefix = cleanNumber.substr(3,3);
	 	line = cleanNumber.substr(6,11);

	function numerize(string) {
		return string.replace(/[^0-9]/g, '');
	}

	function validate(number) {
		if (number.length !== 10) {
			if (number.length === 11) {
				if (number[0] === '1') {
					return number.substr(1,10);
				}
					return "0000000000";
			}
			return "0000000000";
		}
		return number;
	}
	
	this.number = function() {
		return cleanNumber;
	};

	this.areaCode = function() {
		return areaCode;
	};

	this.toString = function() {
		return "(" + areaCode + ")" + " " + prefix + "-" + line;
	};
	
};


module.exports=PhoneNumber;
