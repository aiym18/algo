/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

const mm = BigInt(digits.join('')) +BigInt(1)

return String(mm).split('').map((el)=>{
  return Number(el)
})
};