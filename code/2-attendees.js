// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let attendeeList = ''
  let numOfAttendees = prompt('how many attendees ?')
  numOfAttendees = Number(numOfAttendees)
  while (count < numOfAttendees) {
    let attendee = prompt('enter a name of attendee')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  // copy and paste your code here when you get to the Make step
  let number = 0
  let final = ' '
  let amount = prompt('how many numbers do you want to add together')
  amount = Number(amount)
  while (number < amount){
    let choice = prompt('enter a number')
    choice = Number(choice)
    final = choice + final
    final = Number(final)
    number = number + 1
  }
  alert('This equals ' + final)
 let ba = number
 let average = final / ba 
 alert( 'the average of these numbers is ' + average )


}