/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max=2**31-1,min=-(2**31),res=0
    while(x!=0){
        let pop=x%10;
        if(res>max/10||(res==max/10&&pop>7))return 0
        if(res<min/10||(res==min/10&&pop<-8))return 0
        res=res*10+pop
        x=x>0? Math.floor(x/10):Math.ceil(x/10)
    }
    return res
};