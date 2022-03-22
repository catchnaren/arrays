// time: O(n)
// space: O(1)

const SinglyLinkedList = require('../../../data-structures/Singly_Linked_List');

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.get(7).next = list.get(2);

const findCycle = (head) => {
  let hare = head,
    tortoise = head;
  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;
    if (hare === null || hare.next === null) {
      return false;
    } else {
      hare = hare.next;
    }
    if (tortoise === hare) break;
  }
  let p1 = head,
    p2 = tortoise;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};

console.log(findCycle(list.head));
