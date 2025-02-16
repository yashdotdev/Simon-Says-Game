let userSeq = [];
let gameSeq = [];
let btns = ["green", "red", "blue", "purple"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function() {
  
  if (started == false) {
    started = true;
    console.log("game started");
    
    levelUp();
  }
});



function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 250);
}



function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function() {
    btn.classList.remove("userFlash");
  }, 250);
}



function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Game Started. You are at Level ${level}`;
  
  
  // choose a random btn
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameFlash(randBtn);
  
  gameSeq.push(randColor);
  console.log(gameSeq);
}



function checkAns(idx) {
  if(userSeq[idx] == gameSeq[idx]) {
    
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp , 1000);
    }
    
    // console.log("same value");
  }
  
  else {
    h2.innerHTML = `GAME OVER! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor = "black";
    }, 150);
    reset();
  }
}



function btnPress() {
  
  let btn = this; // 'this' here is vImp for the logic
  // console.log(this);
  userFlash(btn);
  
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  
  checkAns(userSeq.length-1);
}



let allBtns = document.querySelectorAll(".btn");


// Event listener for user to click on buttons
for(btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
