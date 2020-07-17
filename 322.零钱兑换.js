/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

 

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
 

说明:
你可以认为每种硬币的数量是无限的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //保存每一个amount的值，避免重复计算
    let dmap=new Map()
    return dp(coins,amount,dmap)
}
function dp(coins,amount,dmap){
    if(dmap.has(amount))return dmap.get(amount)
    //小于0没有组合，返回-1，等于0 需要0个硬币，返回0
    if (amount<0) return -1
    if (amount==0) return 0
    let res=Number.MAX_SAFE_INTEGER
    for(let i=0;i<coins.length;i++){
        let sub=dp(coins,amount-coins[i],dmap)
        if(sub==-1)continue
        //amount-1的最小值，+1即为amount的最小值
        res=Math.min(res,1+sub)
    }
    dmap.set(amount,res==Number.MAX_SAFE_INTEGER?-1:res)
    return dmap.get(amount)
}