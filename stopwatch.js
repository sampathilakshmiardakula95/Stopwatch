let timeEle = document.getElementById("timeEle");
let startButton = document.getElementById("start")
let stopButton = document.getElementById("stop")
let resetButton = document.getElementById("reset")
let prevState = 0

function onIncrement() {
    timeEle = prevState + 1
}
let uniqueId = startButton.setInterval(onIncrement(), 1000)
stopButton = timeEle.clearInterval(uniqueId)