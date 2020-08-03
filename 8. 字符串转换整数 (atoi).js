/*
请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0 。

提示：

本题中的空白字符只包括空格字符 ' ' 。
假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

*/
/**
 * @param {string} str
 * @return {number}
 */
/*
	        ' '	    +/-	    number	    other
start	    start	signed	in_number	end
signed	    end	    end	    in_number	end
in_number	end	    end	    in_number	end
end	        end	    end	    end	        end

*/
var myAtoi = function(str) {
    const MAX_NUM=2**31-1,MIN_NUM=-(2**31)
    class Automata{
        constructor(){
            this.state="start"
            this.sign=1
            this.resnum=0
            this.table={
                 'start': ['start', 'signed', 'in_number', 'end'],
                 'signed': ['end', 'end', 'in_number', 'end'],
                 'in_number': ['end', 'end', 'in_number', 'end'],
                 'end': ['end', 'end', 'end', 'end']
            }
        }
        getCol(c){
          
           switch(true){
               case c==' ':
                 return 0
               case c=='+':
               case c=='-':
                 return 1
               case /\d/.test(c):
                 return 2
               default:
                 return 3
           }
        }
        getChar(c){
            let col=this.getCol(c)
            this.state=this.table[this.state][col]
            if(this.state=='in_number'){
                this.resnum=this.resnum*10+parseFloat(c)
                this.resnum=this.sign==1?Math.min(MAX_NUM,this.resnum):Math.min(-MIN_NUM,this.resnum)
            }else if(this.state=='signed'){
                this.sign=c=='+'?1:-1
            }
        }
 
    }
    let automata=new Automata()
    for(let i=0;i<str.length;i++){
        automata.getChar(str[i])
    }
    return automata.sign*automata.resnum
 };
