/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defanged = '';
    
    for (let i = 0; i < address.length; i++) {
        if (address[i]=== '.') {
            defanged += '[.]';
        } else {
            defanged += address[i];
        }
    }
    return defanged;
};