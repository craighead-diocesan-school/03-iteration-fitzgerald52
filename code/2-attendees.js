// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let attendeeList = ''
  numOfAttendees = Number(numOfAttendees)
  let numOfAttendees = prompt('')
  while (count < numOfAttendees) {
    let attendee = prompt('enter a name of attendee')
    attendeeList = attendeeList + attendee + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  // copy and paste your code here when you get to the Make step
  
}