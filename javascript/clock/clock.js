var at = function(hour, min) {
	
	var addZero = function(number) {
		if(number < 10) {
            return "0" + number;
        }
        return number;
    }
    
	    min = min || 0;
	    totalMin = (hour*60) + min;

	    totalMin > 0 ? countedHours = Math.floor((totalMin / 60)%24) : countedHours = 24 - (Math.ceil(totalMin/-60)%24);
	    totalMin > 0 ? countedMins = totalMin % 60 : countedMins = 60 + (totalMin%60);


	    clock = addZero(countedHours) + ":" + addZero(countedMins);
    
    return clock;
}

String.prototype.plus = function(add) {

	var hour = parseInt(this.substr(0,2));
		min = parseInt(this.substr(3,4));

	return at(hour, min + add);
}

String.prototype.minus = function(sub) {

	var hour = parseInt(this.substr(0,2));
		min = parseInt(this.substr(3,4));

	return at(hour, min-sub);
}

String.prototype.equals = function(clock) {
	return this.toString() === clock;
}


module.exports.at=at;
