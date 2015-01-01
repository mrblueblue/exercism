var toRna = function(strand){

	return strand.split('').map(function(nucleotide){

		if (nucleotide === 'C') 
			return 'G';
		else if (nucleotide === 'G') 
			return 'C';
		else if (nucleotide === 'A') 
			return 'U';
		else if (nucleotide === "T") 
			return 'A';
		else 
			return nucleotide;

	}).reduce(function(chain,nucleotide){

		return chain + nucleotide

	},'');
};

module.exports=toRna;