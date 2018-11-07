/**
 * https://leetcode.com/problems/course-schedule-ii/
 * There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
             course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  var courses = [],
      i,
      prerequisite,
      coursePrerequisites,
      coursePrerequisite,
      j,
      visitedCourses = [],
      visitedCoursesPath = [];

  for (i = 0; i < numCourses; i += 1) {
    courses[i] = [];
  }

  for (i = 0; i < prerequisites.length; i += 1) {
    prerequisite = prerequisites[i];
    courses[prerequisite[0]].push(prerequisite[1]);
  }

  for (i = 0; i < courses.length; i += 1) {
    coursePrerequisites = courses[i];

    for (j = 0; j < coursePrerequisites.length; j += 1) {
      coursePrerequisite = coursePrerequisites[j];

      if (!visitedCourses.includes(coursePrerequisite)) {
        if (dfs(coursePrerequisite, courses, visitedCourses, visitedCoursesPath) === false) {
          return [];
        }
      }
    }

    if (!visitedCourses.includes(i)) {
      visitedCourses.push(i);
    }
  }

  return visitedCourses;
};

var dfs = function(course, courses, visitedCourses, visitedCoursesPath) {
  var prerequisites,
      i,
      prerequisite;

  if (visitedCourses.includes(course)) {
    return;
  }

  visitedCoursesPath.push(course);

  prerequisites = courses[course];

  for (i = 0; i < prerequisites.length; i += 1) {
    prerequisite = prerequisites[i];

    if (visitedCoursesPath.includes(prerequisite)) {
      return false;
    }

    if (dfs(prerequisite, courses, visitedCourses, visitedCoursesPath) === false) {
      return false;
    }
  }

  visitedCourses.push(course);

  visitedCoursesPath.pop();
}

module.exports = findOrder;
