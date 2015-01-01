
var Hamming = {

    compute: function (xStrand, yStrand) {
        // computes hamming distance between two equal length DNA strands

        'use strict'
        var hammingDistance = 0;

        if (xStrand.length !== yStrand.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        for (var i = 0; i < xStrand.length; i+=1) {
            if (xStrand[i]!=yStrand[i]) 
                hammingDistance+=1;
        };

    return hammingDistance;
    }
}   

module.exports = Hamming;