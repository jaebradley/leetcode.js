/**
 * https://leetcode.com/problems/coursePrerequisites-schedule/
 * There are a total of n coursePrerequisitess you have to take, labeled from 0 to n-1.

Some coursePrerequisitess may have prerequisites, for example to take coursePrerequisites 0 you have to first take coursePrerequisites 1, which is expressed as a pair: [0,1]

Given the total number of coursePrerequisitess and a list of prerequisite pairs, is it possible for you to finish all coursesPrerequisites?

Example 1:

Input: 2, [[1,0]]
Output: true
Explanation: There are a total of 2 coursePrerequisitess to take.
             To take coursePrerequisites 1 you should have finished coursePrerequisites 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 coursePrerequisitess to take.
             To take coursePrerequisites 1 you should have finished coursePrerequisites 0, and to take coursePrerequisites 0 you should
             also have finished coursePrerequisites 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * If a cycle exists, by DFSing through courses and their prerequisites you should come back to same node.
 * To DFS through courses, need to keep track of all the visited nodes and also all the visited nodes as part of the current DFS path.
 * If a node is previously visited in the same DFS path, then a cycle exists.
 * Check this for all unvisited courses

 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  var coursesPrerequisites = [],
      i,
      visitedCourses = [],
      prerequisite,
      currentPathVisitedCourses = [];



  for (i = 0; i < numCourses; i += 1) {
    coursesPrerequisites[i] = [];
  }

  for (i = 0; i < prerequisites.length; i += 1) {
    prerequisite = prerequisites[i];
    coursesPrerequisites[prerequisite[0]].push(prerequisite[1]);
  }

  for (i = 0; i < coursesPrerequisites.length; i += 1) {
    if (!visitedCourses[i] && detectDfsCycle(coursesPrerequisites, i, visitedCourses, currentPathVisitedCourses)) {
      return false;
    }
  }

  return true;
};

var detectDfsCycle = function(coursesPrerequisites, course, visitedCourses, currentPathVisitedCourses) {
  var i,
      coursePrerequisites,
      coursePrerequisite;

  if (visitedCourses[course]) {
    return false;
  }

  visitedCourses[course] = true;
  currentPathVisitedCourses[course] = true;

  coursePrerequisites = coursesPrerequisites[course];

  for (i = 0; i < coursePrerequisites.length; i += 1) {
    coursePrerequisite = coursePrerequisites[i];
    if (currentPathVisitedCourses[coursePrerequisite] || detectDfsCycle(coursesPrerequisites, coursePrerequisite, visitedCourses, currentPathVisitedCourses)) {
      return true;
    }
  }
  return currentPathVisitedCourses[course] = false;
}

module.exports = canFinish;
