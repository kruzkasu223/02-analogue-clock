import "./style.css"

const secondHand: HTMLElement | null = document.querySelector(".hand.second")
const minuteHand: HTMLElement | null = document.querySelector(".hand.minute")
const hourHand: HTMLElement | null = document.querySelector(".hand.hour")

const updateClock = () => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  const secondsRotate = (seconds / 60) * 360 + 90
  const minutesRotate = (minutes / 60) * 360 + (seconds / 60) * 6 + 90
  const hoursRotate = (hours / 12) * 360 + (minutes / 60) * 30 + 90

  if (!(secondHand && minuteHand && hourHand)) return
  secondHand.style.rotate = secondsRotate + "deg"
  minuteHand.style.rotate = minutesRotate + "deg"
  hourHand.style.rotate = hoursRotate + "deg"
}

updateClock()

setInterval(updateClock, 1000)
