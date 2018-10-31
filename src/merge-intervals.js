/**
 * https://leetcode.com/problems/merge-intervals/
 * Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/

var Interval = require('./Interval');

var overlaps = function(firstInterval, secondInterval) {
  return (
    firstInterval.start <= secondInterval.start
      && firstInterval.end >= secondInterval.start
  ) || (
    firstInterval.start <= secondInterval.end
      && firstInterval.end >= secondInterval.end
  );
}

var mergeIntervals = function(firstInterval, secondInterval) {
  return new Interval(
    Math.min(firstInterval.start, secondInterval.start),
    Math.max(firstInterval.end, secondInterval.end)
  );
}

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  var sortedIntervals,
      mergedIntervals,
      intervalCount,
      i,
      interval,
      lastMergedInterval;

  if (!intervals || intervals.length < 1) {
    return [];
  }

  sortedIntervals = intervals.slice();
  sortedIntervals.sort(function(firstInterval, secondInterval) {
    return firstInterval.start - secondInterval.start;
  });
  mergedIntervals = [sortedIntervals[0]];
  intervalCount = sortedIntervals.length;

  for (i = 1; i < intervalCount; i += 1) {
    interval = sortedIntervals[i];
    lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
    if (overlaps(lastMergedInterval, interval)) {
      mergedIntervals[mergedIntervals.length - 1] = mergeIntervals(lastMergedInterval, interval);
    } else {
      mergedIntervals.push(interval);
    }
  }

  return mergedIntervals;
};

module.exports = merge;
