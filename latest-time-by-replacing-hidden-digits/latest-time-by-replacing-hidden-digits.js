/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  function hours(a, b) {
    if (a == "?" && b == "?") return "23";
    else if (a == "?") {
      if (b < 4) return "2" + b;
      else if (b > 3) return "1" + b;
    } else if (b == "?") {
      if (a < 2) return a + "9";
      else if (a > 1) return a + "3";
    } 
    else return a + b;
  }

  function minutes(a, b) {
    if (a == "?" && b == "?") return "59";
    else if (a == "?") return "5" + b;
    else if (b == "?") return a + "9";
    else return a + b;
  }

  return hours(time[0], time[1]) + ":" + minutes(time[3], time[4]);
};