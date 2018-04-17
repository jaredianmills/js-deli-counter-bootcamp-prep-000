var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  var firstInLine = katzDeli[0];
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    katzDeli.shift();
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(katzDeli) {
  var currentOrder = []
  if (katzDeli.length === 0) {
    return "The line is currently empty"
  } else {
    for (let i = 0; i < katzDeli.length; i++) {
      var orderNumber = i + 1
      currentOrder.push(` ${orderNumber}. ${katzDeli[i]}`)
    }
    return `The line is currently:${currentOrder}`
  }
}
