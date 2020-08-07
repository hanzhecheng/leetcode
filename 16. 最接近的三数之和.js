/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums=nums.sort((a,b)=>a-b)
    let val=Number.MAX_SAFE_INTEGER,isTarget=false
    for(let i=0;i<nums.length;i++){
        
        let map=twoSum(nums,i+1,target-nums[i])
        let arr=[...map.keys()]
        for(let j=0;j<arr.length;j++){
            let element=arr[j]+nums[i]
            if(element==target){
                isTarget=true
                break
            }
            if(Math.abs(element-target)<Math.abs(val-target)){
                val=element
            }
        }
        if(isTarget){
            val=target
            break
        }
        while(i<nums.length-1&&nums[i]==nums[i+1])i++
    }
    return val
}
function twoSum(nums,start,target){
    let left=start,right=nums.length-1,res=new Map()
    while(left<right){
        let sum=nums[left]+nums[right],low=nums[left],high=nums[right]
        if(sum>target){
            while(left<right&&nums[right]==high){
                right--
                if(!res.get(sum)){
                    res.set(sum,sum)
                }
            }
        }else if(sum<target){
            while(left<right&&nums[left]==low){
                left++
                if(!res.get(sum)){
                    res.set(sum,sum)
                }
            }
        }else{
            res.set(target,target)
            return res
        }
    }
    return res
}
console.log(threeSumClosest([1,1,1,1],3))