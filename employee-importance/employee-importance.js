/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let result = 0; 
    
    const findNext = id => employees.filter(emp => emp.id == id)[0];
    const queue = [findNext(id)]; 
    
    while (queue.length > 0) {
        let current = queue.shift(); 
        result += current.importance;
        
        for(const subId of current.subordinates) {
            queue.push(findNext(subId));         
        }
    }
    return result;
};