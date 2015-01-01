var words = function(str) {

    var wordCount = Object.create(null), //create empty object
        sentence = str.split(/\s+/); //splits word according to whitespace

    sentence.forEach( function (word) {
        if (wordCount[word] === undefined) //if property exists in Object's prototype
            wordCount[word] = 1; //initially set word count to 1
        else
            wordCount[word]+=1;
    })

    return wordCount;

};

module.exports = words;