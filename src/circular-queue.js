/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.maxSize = k;
  this.values = [];
  this.frontIndex = 0;
  this.rearIndex = 0;
  this.size = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.size === this.maxSize) {
    return false;
  }

  if (this.size > 0) {
    this.rearIndex = (this.rearIndex + 1) % this.maxSize;
  }

  this.values[this.rearIndex] = value;
  this.size += 1;

  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.size === 0) {
    return false;
  }

  delete this.values[this.frontIndex];
  this.size -= 1;

  if (this.size > 0) {
    this.frontIndex = (this.frontIndex + 1) % this.maxSize;
  }

  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.values[this.frontIndex];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.values[this.rearIndex];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.maxSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

 module.exports = MyCircularQueue;
