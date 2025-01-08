let countHome = 0
let countGuess = 0

let updateHomeCount = document.getElementById("homeCount")
let updateGuestCount = document.getElementById("guestCount")

function homeIncrement1(){
    countHome += 1
    updateHomeCount.textContent = countHome
}

function homeIncrement2(){
    countHome += 2
    updateHomeCount.textContent = countHome
}

function homeIncrement3(){
    countHome += 3
    updateHomeCount.textContent = countHome
}

function guestIncrement1(){
    countGuess += 1
    updateGuestCount.textContent = countGuess
}

function guestIncrement2(){
    countGuess += 2
    updateGuestCount.textContent = countGuess
}

function guestIncrement3(){
    countGuess += 3
    updateGuestCount.textContent = countGuess
}
