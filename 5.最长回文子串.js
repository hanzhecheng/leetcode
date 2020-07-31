function longestPalindrome(s){
    let res=""
    for(let i=0;i<s.length;i++){
        let s1=isPalindrome(s,i,i)
        let s2=isPalindrome(s,i,i+1)
        res=res.length>s1.length?res:s1;
        res=res.length>s2?res:s2;
    }
    return res

}
function isPalindrome(s,left,right){
    while(left>=0&&right<s.length&&s[left]==s[right]){
        left--
        right++
    }
    return s.substr(left+1,right-1-left)
}
console.log(longestPalindrome("cbbd"))