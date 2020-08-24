/*
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

示例 1:

输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
示例 2:

输入: "aba"

输出: False
示例 3:

输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

*/
/**
 * @param {string} s
 * @return {boolean}
 */
//常规
var repeatedSubstringPattern = function(s) {
    let len=s.length,start=""
    if(s.length<=1)return false
    for(let i=0;i<len/2;i++){
        start+=s[i]
        let isZero=len%start.length
        if(isZero==0){
            if(start.repeat(len/start.length)==s){
                return true
            }
        }
    }
    return false
};
/*假设母串S由子串a+b组成，则(S+S)=a+b+a+b，
掐头去尾，则开头的a和最后的b无法匹配，
相当于(S+S)[1:-1] = c+b+a+d ，其中c!=a, d!=b，
如果a+b在其中出现，则必然有a=b*/
var repeatedSubstringPattern = function(s) {
    let s1 = (s + s).slice(1, -1);
    return s1.indexOf(s) != -1;
}
