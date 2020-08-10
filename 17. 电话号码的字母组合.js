/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let phone={
        '2':"abc",
        '3':"def",
        '4':"ghi",
        '5':'jkl',
        '6':"mno",
        '7':"pqrs",
        '8':"tuv",
        '9':"wxyz"
    }
    let res=[]
    function backtrack(combination,next_digits){
        if(next_digits.length==0){
            res.push(combination)
        }else{
            let digit=next_digits.substring(0,1)
            let letters=phone[digit]
            for(let i=0;i<letters.length;i++){
                let letter=letters.substring(i,i+1)
                backtrack(combination+letter,next_digits.substring(1))
            }
        }
    }
    if(digits!=""){
        backtrack("",digits)
    }
    return res
};
console.log(letterCombinations("23"))