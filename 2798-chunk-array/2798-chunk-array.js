/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (size <= 0) throw new Error("Size must be greater than 0"); 
    const result = []; 
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size)); 
    }
    return result; 
};
