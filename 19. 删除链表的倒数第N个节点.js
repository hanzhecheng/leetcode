/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp=new ListNode(0)
    temp.next=head
    //双指针一次遍历
    let first=temp,second=temp
    for(let i=1;i<=n+1;i++){
        first=first.next
    }
    while(first!=null){
        first=first.next
        second=second.next
    }
    second.next=second.next.next
    return temp.next
}
