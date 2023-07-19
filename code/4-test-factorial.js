// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // number they want the value for
  let count = prompt('what number do you want the factorial for ?')
  count = Number(count)
  let total = count
  let next = 0

  while (count > 0) {
    next = Number(next)
    total = Number(total)
    //makes sure the loop doesnt run forever
    count = count - 1
    //adds the count to the total
    total = count + total
  }
  alert(' The factorial is ' + total)
}
