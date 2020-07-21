/*
给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need={},window={}
    t.split("").forEach(item=>{
        need[item]=need[item]?(need[item]+1):1
    })
    let left=0,right=0,valid=0,start=0,len=Number.MAX_SAFE_INTEGER
    while(right<s.length){
        let ch=s[right]
        right++
        if (need[ch]) {
            window[ch]=window[ch]?(window[ch]+1):1
            if (need[ch]==window[ch]) {
                valid++
            }
        }
        //t所有字母都已找到,此处必须是need的键个数，不能用t.length代替，避免t中字母重复导致数据不对
        while (valid==Object.keys(need).length) {
            if(right-left<len){
                start=left
                len=right-left
            }
           
            let ch=s[left]
            left++
            if(need[ch]){
                if (window[ch]==need[ch]) {
                    valid--
                }
                window[ch]--
            }
        }
    }
    return len==Number.MAX_SAFE_INTEGER?"":s.substr(start,len)
};
console.log(minWindow("aa","aa"))