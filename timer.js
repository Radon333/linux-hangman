const timeLeft = document.querySelector('#time-left')
let currentTime = timeLeft.textContent
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
  
    if(currentTime === 0 ) {
      clearInterval(timerId)
      window.location.replace("./defeat.html");
    }
  }
  
  let timerId = setInterval(countDown, 1000)