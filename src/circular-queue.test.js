var MyCircularQueue = require('./circular-queue');

describe('MyCircularQueue', function() {
  describe('when queue is empty', function() {
    it('is false when dequeuing', function() {
      var queue = new MyCircularQueue(3);
      expect(queue.deQueue()).toBe(false);
    });

    it('is true when enqueuing', function() {
      var queue = new MyCircularQueue(3);
      expect(queue.enQueue(1)).toBe(true);
    });

    it('enqueued value is front value', function() {
      var queue = new MyCircularQueue(3);
      queue.enQueue(1)
      expect(queue.Front()).toBe(1);
    });

    it('enqueued value is rear value', function() {
      var queue = new MyCircularQueue(3);
      queue.enQueue(1)
      expect(queue.Rear()).toBe(1);
    });
  });

  describe('when queue is full', function() {
    describe('when queue is of size 0', function() {
      it('is false when dequeuing', function() {
        var queue = new MyCircularQueue(0);
        expect(queue.deQueue()).toBe(false);
      });
    });

    describe('when queue has a size greater than 0', function() {
      it('is false when enqueuing', function() {
        var queue = new MyCircularQueue(1);
        queue.enQueue(1);
        expect(queue.enQueue(2)).toBe(false);
      });

      it('is true when dequeuing', function() {
        var queue = new MyCircularQueue(1);
        queue.enQueue(1);
        expect(queue.deQueue()).toBe(true);
      });
    });
  });

  describe('when queue is not empty nor full', function() {
    describe('when queue has one element left', function() {
      describe('when dequeuing', function() {
        it('returns true', function() {
          var queue = new MyCircularQueue(1);
          queue.enQueue(1);
          expect(queue.deQueue()).toBe(true);
        });

        it('front is -1', function() {
          var queue = new MyCircularQueue(1);
          queue.enQueue(1);
          expect(queue.Front()).toBe(1);
          queue.deQueue();
          expect(queue.Front()).toBe(-1);
        });

        it('rear is -1', function() {
          var queue = new MyCircularQueue(1);
          queue.enQueue(1);
          expect(queue.Rear()).toBe(1);
          queue.deQueue();
          expect(queue.Rear()).toBe(-1);
        });
      });
    });

    describe('when queue has more than one element left', function() {
      describe('when dequeuing', function() {
        it('moves to next front', function() {
          var queue = new MyCircularQueue(2);
          queue.enQueue(1);
          queue.enQueue(2);
          expect(queue.Front()).toBe(1);
          expect(queue.deQueue()).toBe(true);
          expect(queue.Front()).toBe(2);
        });

        it('rear does not change', function() {
          var queue = new MyCircularQueue(2);
          queue.enQueue(1);
          queue.enQueue(2);
          expect(queue.Rear()).toBe(2);
          queue.deQueue();
          expect(queue.Rear()).toBe(2);
        });
      });
    });
  });
})
