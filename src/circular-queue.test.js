var MyCircularQueue = require('./circular-queue');

describe('MyCircularQueue', function() {
  it('is false when dequeuing', function() {
    var queue = new MyCircularQueue(3);
    expect(queue.deQueue()).toBe(false);
  });

  it('is true when enqueuing', function() {
    var queue = new MyCircularQueue(3);
    expect(queue.enQueue(1)).toBe(true);
  });

  it('adds value to front when enqueuing', function() {
    var queue = new MyCircularQueue(3);
    queue.enQueue(1)
    expect(queue.Front()).toBe(1);
  });

  it('enqueues to "front" of array', function() {
    var queue = new MyCircularQueue(3);
    queue.enQueue(1)
    queue.enQueue(2);
    queue.enQueue(3);
    queue.deQueue();
    expect(queue.Front()).toBe(2);
    queue.enQueue(4);
    expect(queue.Rear()).toBe(4);

    queue.deQueue();
    expect(queue.Front()).toBe(3);
    queue.deQueue();

    expect(queue.Front()).toBe(4);
    expect(queue.Rear()).toBe(4);

    queue.enQueue(5);

    expect(queue.Front()).toBe(4);
    expect(queue.Rear()).toBe(5);
  });
})
