/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp=new Map()
    nums.forEach((item,index)=>{
        mp.set(item,index)
    })
    for(let i=0;i<nums.length;i++){
        let val=target-nums[i]
        if(mp.has(val)&&mp.get(val)!=i){
            return [i,mp.get(val)]
        }
    }
    return []
};