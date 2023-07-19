// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let count = prompt('what number do you want the square series for ?')
  count = Number(count)
  let squared = ''
  while (count > 0) {
    let square = count * count
    //makes sure the loop dosent run forever
    count = count - 1
    squared = squared + ' ' + square
  }

  alert('the square series is ' + squared)
}
