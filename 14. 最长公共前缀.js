/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0)return ""
    strs=strs.sort((a,b)=>a.length-b.length)
    let str=strs[0],len=0,isEnd=false
    for(let i=0;i<str.length;i++){
        if(isEnd){
            break
        }
        for(let j=0;j<strs.length;j++){
           if(strs[j].startsWith(str.substr(0,i+1))){
               if(j==strs.length-1){
                   len++
               }
           }else{
               isEnd=true
               break
           }
        }
    }
    return str.substr(0,len)
};