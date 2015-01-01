var dna = function (strand) {

    var strand = strand || '';

    function count(sequence) {
        var counter = 0;
        strand.split('').forEach(function (nucleotide) {
            if (nucleotide === sequence) {
                counter = +1;
            }
        });
        return counter;
    }

    function histogram() {
        return strand.split('').reduce(function (counter, nucleotide) {
            counter[nucleotide] = +1;
            return counter;
        }, {A: 0, T: 0, C: 0, G: 0});
    }

    return {count: count,
            histogram: histogram
        };

}

module.exports=dna;