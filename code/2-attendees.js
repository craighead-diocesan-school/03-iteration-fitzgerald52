// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt()
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {
  // copy and paste your code here when you get to the Make step
  
}