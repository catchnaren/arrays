// To reverse the order of nodes in the linked list

const SinglyLinkedList = require('../../../data-structures/Singly_Linked_List');

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// time: O(n)
// space: O(1)

console.log(reverseLinkedList(list.head));
