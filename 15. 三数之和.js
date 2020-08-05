/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[]
    nums=nums.sort((a,b)=>a-b)
    
    if(nums[0]>0) return res
    if(nums.length<3) return res
    
    for(let i=0;i<nums.length;i++){
       
        let arr=twosum(nums,i+1,-nums[i])
        arr.forEach(item=>{
            item.push(nums[i])
            res.push(item)
        })
        while(i<nums.length-1&&nums[i]==nums[i+1])i++
    }
    return res
};
function twosum(nums,start,target){
    let left=start,right=nums.length-1,res=[]
    while(left<right){
        let sum=nums[left]+nums[right],low=nums[left],high=nums[right]
        if(sum>target){
            while(left<right&&nums[right]==high)right--
        }else if(sum<target){
            while(left<right&&nums[left]==low)left++
        }else{
            let arr=[nums[left],nums[right]]
            res.push(arr)
             while(left<right&&nums[right]==high)right--
             while(left<right&&nums[left]==low)left++
        }
    }
    return res
}
console.log(threeSum([-1,0,1,2,-1,-4]))