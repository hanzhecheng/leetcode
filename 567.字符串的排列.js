/*给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

示例1:

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").

示例2:

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 

注意：

输入的字符串只包含小写字母
两个字符串的长度都在 [1, 10,000] 之间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutation-in-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let need={},window={}
    let left=0,right=0,valid=0
    s1.split("").forEach(item=>{
        need[item]=need[item]?(need[item]+1):1
    })
    while(right<s2.length){
        let ch=s2[right]
        right++
        if(need[ch]){
            window[ch]=window[ch]?window[ch]+1:1
            if (need[ch]==window[ch]) {
                valid++
            }
        }
        //窗口缩小。=不能省略
        while(right-left>=s1.length){
            if(valid==Object.keys(need).length){
                return true
            }
            let ch=s2[left]
            left++
            if(need[ch]){
                if(need[ch]==window[ch]){
                    valid--
                }
                window[ch]--
            }
        }
    }
    return false
};
console.log(checkInclusion("ab","eidboaoo"))