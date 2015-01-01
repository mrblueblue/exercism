var Gigasecond = function(birthDay) {

	this.birthday = birthDay;

	this.interval = 1000000000000;

	this.date = function() {

		var anniversary = new Date(this.birthday.getTime() + this.interval);

		anniversary.setSeconds(0);
    	anniversary.setMinutes(0);
    	anniversary.setHours(0);

   	 	return anniversary;

	}
};

module.exports=Gigasecond;