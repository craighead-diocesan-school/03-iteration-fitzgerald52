// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let attendeeList = ''
  //gets number of attendees
  let numOfAttendees = prompt('how many attendees ?')
  numOfAttendees = Number(numOfAttendees)
  //makes the code run while number of attendees is larger than the amount of names entered
  while (count < numOfAttendees) {
    let attendee = prompt('enter a name of attendee')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }

  alert(attendeeList)
}

function make2() {
  let number = 0
  let final = ' '
  //how many numbers they are wanting to add together
  let amount = prompt('how many numbers do you want to add together')
  amount = Number(amount)
  //runs the code while the amount of numbers the want to add together is greater than the number they have added up
  while (number < amount) {
    let choice = prompt('enter a number')
    choice = Number(choice)
    final = choice + final
    final = Number(final)
    number = number + 1
  }
  alert('This equals ' + final)
  let ba = number
  let average = final / ba
  alert('the average of these numbers is ' + average)
}
