/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0||(x%10==0&&x!=0)) return false
    x=x+""
    let left=0,right=x.length-1
    while(right>left&&x[right]==x[left]){
        right--
        left++
    }
    return x.length%2==0?(left-right==1):right==left
};