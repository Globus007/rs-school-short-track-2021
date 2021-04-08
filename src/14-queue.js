const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
  }

  get size() {
    if (!this.head) return 0;
    let node = this.head;
    let size = 1;
    while (node.next) {
      node = node.next;
      size++;
    }
    return size;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  dequeue() {
    if (!this.head) return undefined;
    const element = this.head.value;
    this.head = this.head.next;
    return element;
  }
}

module.exports = Queue;
