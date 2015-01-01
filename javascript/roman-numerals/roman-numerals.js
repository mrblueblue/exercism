var toRoman = function(number) {

	var values = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10,'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
		result = '';

	 Object.keys(values).forEach( function(numeral) {
        while (number >= values[numeral]) {
            roman += numeral;
            number -= values[numeral];
        }
    });
	return result;
}




module.exports=toRoman;