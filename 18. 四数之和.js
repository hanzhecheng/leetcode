/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
    let res=[]
    for(let i=0;i<nums.length;i++){
        let arr=threeSum(nums,i+1,target-nums[i])
        arr.forEach(item=>{
            item.push(nums[i])
            res.push(item)
        })
        while(i<nums.length-1&&nums[i]==nums[i+1])i++
    }
    return res
}
function threeSum(nums,start,target){
    let res=[]
    for(let i=start;i<nums.length;i++){
        let arr=twoSum(nums,i+1,target-nums[i])
        arr.forEach(item=>{
            item.push(nums[i])
            res.push(item)
        })
        while(i<nums.length-1&&nums[i]==nums[i+1])i++
    }
    return res
}
function twoSum(nums,start,target){
    let left=start,right=nums.length-1,res=[]
    while(left<right){
        let sum=nums[left]+nums[right],low=nums[left],high=nums[right]
        if(sum>target){
            while(left<right&&nums[right]==high)right--
        }else if(sum<target){
            while(left<right&&nums[left]==low)low++
        }else{
            let arr=[nums[left],nums[right]]
            res.push(arr)
            while(left<right&&nums[right]==high)right--
            while(left<right&&nums[left]==low)low++
        }
    }
    return res
}