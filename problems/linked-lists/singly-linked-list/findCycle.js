/**
  Given the head of a linked list, return the node where the cycle begins. 
  If there is no cycle, return null.

  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
  Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). 
  It is -1 if there is no cycle. Note that pos is not passed as a parameter.
  
  Do not modify the linked list.
 */

// time: O(n)
// space: O(n)

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
console.log({ lastNode: list.get(7) });

const findCycle = (head) => {
  let currentNode = head;
  const seenNodes = new Set();
  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) return false;
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
};

console.log(findCycle(list.head));
