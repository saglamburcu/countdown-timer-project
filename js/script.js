const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

let giveaway = document.querySelector("aside h6")
let boxes = document.querySelectorAll(".boxes div h1")
let text = document.querySelector(".boxes")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0)


//let futureDate = new Date(2022, 2, 19, 6, 30, 0)

let year = futureDate.getFullYear()
let month = futureDate.getMonth() 
month = months[month]
let day = futureDate.getDate()
let weekday = weekdays[futureDate.getDay()] 
let hours = futureDate.getHours()
let minutes = futureDate.getMinutes()

giveaway.innerHTML = `Giveaway Ends On ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}am`


function remainingTime() {
  let currentDate = new Date().getTime()
  let remaining = futureDate - currentDate; 
  console.log(currentDate)

  // 1sec = 1000msec
  // 1min = 60sec
  // 1h = 60min
  // 1day = 24h

  let oneDay = 24*60*60*1000
  let oneHour = 60*60*1000
  let oneMinute = 60*1000

  let remainingDay = Math.floor(remaining / oneDay)
  let remainingHour = Math.floor((remaining%oneDay)/oneHour)
  let remainingMinute = Math.floor((remaining%oneHour)/oneMinute)
  let remainingSecond = Math.floor((remaining%oneMinute) / 1000)

  let values = [remainingDay, remainingHour, remainingMinute, remainingSecond]

  boxes.forEach((box,index) => {
    box.innerHTML = checkZero(values[index])
  })

  function checkZero(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item
  }

  if (remaining < 0) {
    clearInterval(timer)
    text.innerHTML = `<h4>Sorry, this giveaway has expired!</h4>`
  }
  
}

let timer = setInterval(remainingTime, 1000) 
remainingTime()

