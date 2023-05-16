function startTime() {
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")
    let meridian = document.getElementById("meridian")
    


    let time = new Date()

    hours.innerHTML = time.getHours()
    minutes.innerHTML = time.getMinutes()
    seconds.innerHTML = time.getSeconds()

    if (hours.innerHTML >= 12) {
        meridian.innerHTML = "pm"
    }

    if (hours.innerHTML > 12) {
        hours.innerHTML = hours.innerHTML - 12
        hours.innerHTML = hours.innerHTML
    }

    if (seconds.innerHTML < 10) {
        seconds.innerHTML = "0" + seconds.innerHTML
    }

    
    if (minutes.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML
    }

}

let speed = 1
setInterval(startTime, speed)

startTime()