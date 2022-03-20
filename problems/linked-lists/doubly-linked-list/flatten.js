/**
 You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, 
 and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, 
 also containing these special nodes. These child lists may have one or more children of their own, and so on, 
 to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, 
doubly linked list. Let curr be a node with a child list. 

The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.
 */

// time: O(n)
// space: O(1)

const dllList = require('../../../data-structures/Doubly_Linked_List');

const list1 = new dllList();
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
list1.push(6);

const list2 = new dllList();
list2.push(7);
list2.push(8);
list2.push(9);

const list3 = new dllList();
list3.push(12);
list3.push(13);

const list4 = new dllList();
list4.push(10);
list4.push(11);

list1.get(1).child = list2.head;
list1.get(4).child = list3.head;
list2.get(1).child = list4.head;

const flatten = (head) => {
  if (!head) return head;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
};

const fList = flatten(list1.head);
console.log(fList);
