// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = prompt('Choose a number to count down from')
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {
  // copy and paste your code here when you get to the Make step
  let count = 0
  let countby = prompt('choose the number the to count up in')
  let max = prompt('choose a maximum number to count up to')
  while (count<max){
    alert(count + '...')
    count = count + countby
  }
  count = Number(count)
  countby = Number(countby)
  max = Number(max)
}