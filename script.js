"use strict";

const rock = document.getElementById("rock-user");
const scisor = document.getElementById("scissors-user");
const paper = document.getElementById("paper-user");
const buttons = document.querySelectorAll("button");
const confirmas = document.querySelector(".result");
const count_user = document.querySelector(".count-user");
const count_pc = document.querySelector(".count-pc");
const notification = document.querySelector(".notification");

const rock_pc = document.getElementById("rock-pc");
const scisor_pc = document.getElementById("scissors-pc");
const paper_pc = document.getElementById("paper-pc");
const restart = document.querySelector(".play");

let userSelection = "";
let PcSelection = "";
let userResult = 0;
let pcResult = 0;

rock.onclick = function () {
  removersgadow();
  userSelection = 1;
  rock.classList.add("selection-shadow");
};
scisor.onclick = function () {
  removersgadow();
  userSelection = 2;
  scisor.classList.add("selection-shadow");
};
paper.onclick = function () {
  removersgadow();
  userSelection = 3;
  paper.classList.add("selection-shadow");
};

function removersgadow() {
  for (let x of buttons) {
    x.classList.remove("selection-shadow");
  }
}

confirmas.onclick = function () {
  if (userSelection == "") {
    alert("Please make a choice!");
    return;
  }
  confirmas.style.display = "none";

  randomNumber();
  setTimeout(function () {
    checkWiner();
  }, 300);

  //   checkWiner();
};

// random Number form 1 to 3
function randomNumber() {
  PcSelection = Math.floor(Math.random() * 3 + 1);
  if (PcSelection == 1) {
    rock_pc.classList.add("selection-shadow");
  } else if (PcSelection == 2) {
    scisor_pc.classList.add("selection-shadow");
  } else if (PcSelection == 3) {
    paper_pc.classList.add("selection-shadow");
  }
}

restart.onclick = function () {
  reseter();
};

function reseter() {
  removersgadow();
  confirmas.style.display = "block";
  userSelection = "";
  PcSelection = "";
  notification.style.color = "white";
  notification.innerHTML = "Your Selection:";
}

function checkWiner() {
  if (userSelection == PcSelection) {
    alert("SAME RESULT. PLAY AGAIN");
    reseter();
  } else if (
    (userSelection == 1 && PcSelection == 2) ||
    (userSelection == 2 && PcSelection == 3) ||
    (userSelection == 3 && PcSelection == 1)
  ) {
    notification.innerHTML = "YOU WON ! ! ! ";
    notification.style.color = "green";
    userResult += 1;
    count_user.innerHTML = userResult;
  } else {
    notification.innerHTML = "YOU LOOSE ! ! ! ";
    notification.style.color = "red";
    pcResult += 1;
    count_pc.innerHTML = pcResult;
  }
}
