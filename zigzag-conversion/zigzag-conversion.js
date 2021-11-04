/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
   if (numRows === 1) return s;
    
    let rows = new Array(); 
    
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows.push(new Array());
    }
    
    let currRow = 0;
    let down = false; 
    
    for (let char of s) {
        rows[currRow].push(char);
        if(currRow === 0 || currRow === numRows - 1) down = !down;
        currRow += (down) ? 1 : -1;
    }
    
    let newWord = ""; 
    
    for (let row of rows) {
        newWord += row.join('');
    }
    return newWord;
};