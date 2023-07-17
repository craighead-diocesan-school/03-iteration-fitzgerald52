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
    //reasigns the new totals
    next = Number(next)
    total = Number(total)
    count = count - 1
    total = count + total
  }
  alert(' The factorial is ' + total)
}
