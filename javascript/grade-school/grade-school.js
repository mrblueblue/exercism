var School = function() {

	var roster = {}

	this.roster = function() {
		for (grade in roster) {
			roster[grade].sort();
		}
		return roster;
	};

	this.add = function(name, grade) {
		roster[grade]? roster[grade].push(name) : roster[grade]=[name];
	};

	this.grade = function(grade) {
		return roster[grade]? roster[grade].sort() : []
	};
	
};

module.exports=School;