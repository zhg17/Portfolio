const overlay = document.getElementById("overlay");
const modalButtons = document.querySelectorAll(".open-window");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-buttons");
const hamburgerButton = document.querySelector("#hamburgerButton");
const hamburger = document.querySelector(".hamburger");
const msgButton = document.querySelector("#msg-button");
const portfolioButton = document.querySelector('#portfolio-button');

let msgs = [];

function onStart() {
    if (localStorage.getItem("msgs-storage")) {
        msgs = JSON.parse(localStorage.getItem("msgs-storage")) || [];
        updateStorage();
    }
}

onStart();


portfolioButton.addEventListener('click', function(){
    let portfolio = document.getElementById('portfolio-div');
    if (portfolio.style.display == 'none') {
        portfolioButton.innerHTML = 'Click to hide portfolio'
        portfolio.style.display = 'block';
    } else {
        portfolio.style.display = 'none';
        portfolioButton.innerHTML = 'Click to show portfolio'
    }
})


msgButton.addEventListener('click', function() {
    const msgInput = document.querySelector("#msg-input");
    if(msgInput.value != '') {
        msgs.push(msgInput.value);
        updateStorage();
    } else {
        alert("Empty message");
    }
    msgInput.value = '';
})

function updateStorage() {
    localStorage.setItem("msgs-storage", JSON.stringify(msgs));
}

modalButtons.forEach((currButton, index) => {
    currButton.addEventListener('click', () => {
        overlay.classList.add('active');
        modals[index].classList.add('active');
    })
})


closeButtons.forEach((currButton, index) => {
    currButton.addEventListener('click', () => {
        overlay.classList.remove('active');
        modals[index].classList.remove('active');
    })
})

hamburgerButton.addEventListener('click', function() {
    if (hamburger.classList.contains('active')) {
        hamburgerButton.innerHTML = '<i class="fa fa-bars fa-3x"></i>';
        hamburger.classList.remove('active');
    } else {
        hamburger.classList.add('active');
        hamburgerButton.innerHTML = '<i class="fa fa-times fa-3x"></i>';
    }
})


