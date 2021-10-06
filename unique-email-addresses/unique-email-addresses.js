/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let validEmails = new Set(); 
    
    emails.forEach((email) => {
        let parts = email.split('@'); 
        let local = parts[0].split('+');
        
        validEmails.add(local[0].replaceAll('.','') + "@" + parts[1]);
    });
    return validEmails.size;
};