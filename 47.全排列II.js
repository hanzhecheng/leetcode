/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let arr=[],res=[],used=[]
    //将nums排序，不影响最后结果
    nums=nums.sort()
    dp(nums,arr,res,used)
    return res
};
function dp(nums,arr,res,used){
    
    if(arr.length==nums.length){
        res.push([...arr])
        return
    }
    for(let i=0;i<nums.length;i++){
        if(used[i])continue
        //i>0保证i-1有效 i-1有值 即跳过
        if(i>0&&nums[i]==nums[i-1]&&!used[i-1])continue
        arr.push(nums[i])
        used[i]=true
        dp(nums,arr,res,used)
        used[i]=false
        arr.pop()
        
    }
}
console.log(permuteUnique([1,2,1])) 