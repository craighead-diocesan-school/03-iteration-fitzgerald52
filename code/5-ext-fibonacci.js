// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let max = prompt('What number do you want the fibonacci sequence to go up to ?')
  max = Number(max)

  let count = 0
  count = Number(count)

  let old = 0

  let prev = 1

  let next = ''

  let sequence = 'fibonacci sequence :'
  while (count < max) {
    next = old + prev
    old = prev
    prev = next
    sequence = sequence + ' ' + next
    count = next
  }
  alert(sequence)
}
