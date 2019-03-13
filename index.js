function findMatching(drivers, name) {
  return drivers.filter(function (driverName) { return driverName.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driverName) { return driverName.substr(0, letters.length) === letters })
}

function matchName(drivers, name) {
  return drivers.filter(function (driverName) { return driverName.name === name })
}
