const ftoc = function(fTemp) {
    let celsius = (fTemp - 32) * (5 / 9);
    return Math.round(celsius * 10) / 10;
};

const ctof = function(cTemp) {
    let fahren = (cTemp * (9 / 5)) + 32;
    return Math.round(fahren * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
