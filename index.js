let score = 0

let num1 = document.getElementById("num1-el")

function home2() {
    score += 2
    num1.innerText = score
}

function home3() {
    score += 3
    num1.innerText = score
}

function home5() {
    score += 5
    num1.innerText = score
}


let score2 = 0

let num2 = document.getElementById("num2-el")

function guest2() {
    score2 += 2
    num2.innerText = score2
}

function guest3() {
    score2 += 3
    num2.innerText = score2
}

function guest5() {
    score2 += 5
    num2.innerText = score2
}

function reset() {
    score = 0
    score2 = 0
    num1.innerText = score
    num2.innerText = score2
}