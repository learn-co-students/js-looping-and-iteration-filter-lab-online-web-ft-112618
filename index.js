// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase()});
}


function fuzzyMatch(drivers, partialName){
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName; });
}

function matchName(drivers, string){
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase()});
}
