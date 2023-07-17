// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  //lets user choose number
  let countdownfrom = prompt('Choose a number to count down from')
  while (countdownfrom > 0) {
    alert(countdownfrom + '...')
    count = countdownfrom - 1
  }

  alert('Lift Off!')
}

function make1() {
  let count = 0
  //number that the user wants to count up in
  let countby = prompt('choose the number the to count up in')
  let max = prompt('choose a maximum number to count up to')
  while (count <= max) {
    alert(count + '...')
    //adds the number they want to add up in to the past total
    count = count + countby
    count = Number(count)
    countby = Number(countby)
    max = Number(max)
  }
  //lets user know how much is left over
  count = count - countby
  let leftover = max - count
  alert('all done ! with ' + leftover + 'left')
}
