/**
 Given the head of a singly linked list and two integers left and right where left <= right, 
 reverse the nodes of the list from position left to position right, 
 and return the reversed list.
 */

const SinglyLinkedList = require('../../../data-structures/Singly_Linked_List');

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

const reverseBetween = (head, m, n) => {
  let currentPos = 1,
    currentNode = head,
    start = head;
  console.log({ currentPos, currentNode, start });

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

// time: O(n)
// space: O(1)

console.log(reverseBetween(list.head, 1, 4));
