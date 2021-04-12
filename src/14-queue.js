// const ListNode = require('../extensions/list-node');
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
    this.head = new ListNode();
    this.tail = this.head;
  }

  enqueue(element) {
    this.tail.value = element;
    this.tail.next = new ListNode();
    this.tail = this.tail.next;
  }

  dequeue() {
    const element = this.head.value;
    this.head = this.head.next;
    return element;
  }
}

module.exports = Queue;
