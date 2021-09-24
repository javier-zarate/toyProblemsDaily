/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {    
    let row1 = {'q':true,'w':true,'e':true,'r':true,'t':true,'y':true,'u':true,"i":true,'o':true,'p':true};
    let row2 = {'a':true,'s':true,'d':true,'f':true,'g':true,'h':true,'j':true,"k":true,'l':true};
    let row3 = {'z':true,'x':true,'c':true,'v':true,'b':true,'n':true,'m':true};
    
    let result = [];
    for (var word of words) {
        let oneLine = true;
        let firstChar = word[0].toLowerCase();
        let matchingDictionary = row1[firstChar] ? row1: row2[firstChar] ? row2 : row3;
        
        for (var char of word.toLowerCase()) {

            if ((row1[char] ? row1 : row2[char] ? row2 : row3) !== matchingDictionary) {
                oneLine = false;
                break;
            }
        }
        oneLine ? result.push(word) : null;

    }
    return result;
}