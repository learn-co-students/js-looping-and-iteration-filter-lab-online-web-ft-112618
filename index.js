// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (name) { return name.toLowerCase() === string.toLowerCase(); });
};

function fuzzyMatch(array, string) {
  return array.filter(function (name) { return name.startsWith(string); })
};

function matchName(array, string) {
  return array.filter(function (array) { return array.name === string; });
};
