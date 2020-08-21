/*
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
*/
var generateParenthesis = function(n) {
    let arr=[]
    dfs(n,n,"",arr)
    return arr
};
function dfs(left,right,curStr,resArr){
    if(left==0&&right==0){
        resArr.push(curStr)
        return
    }
    if(left>0){
        dfs(left-1,right,curStr+"(",resArr)
    }
    if(left<right){
        dfs(left,right-1,curStr+")",resArr)
    }
}
console.log(generateParenthesis(3))