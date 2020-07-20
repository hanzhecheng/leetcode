/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//回溯法
var permute = function(nums) {
    let arr=[],res=[],used=[]
    dp(nums,arr,res,used)
    return res
};
function dp(nums,arr,res,used){
    //结束条件
    if(nums.length==arr.length){
        res.push([...arr])
        return
    }
    for(let i=0;i<nums.length;i++){ 
        //排除不合法的选择
        if(used[i])continue
        //选择
        used[i]=true
        arr.push(nums[i])
        //根据选择进入下一层决策树
        dp(nums,arr,res,used)
        used[i]=false
        //取消选择
        arr.pop()
    }
}
console.log(permute([1,2,3]))
