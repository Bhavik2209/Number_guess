const randomNuber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessfield")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastresult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultpara")

const p = document.createElement('p')

let preGuess=[];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click",function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a number")
    }
    else if (guess<1){
        alert("please enter a number more than 1")
    }
    else if (guess>100){
        alert("please enter a number less than 100")
    }
    else{
        preGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayM(`GAME OVER. Random number was ${randomNuber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}
function checkGuess(guess){
    if(guess==randomNuber){
        displayM(`you guessed it right`)
        endGame()
    }else if(guess<randomNuber){
        displayM(`the number is too low`)
    }else if(guess>randomNuber){
        displayM(`the number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML +=`${guess} `;
    numGuess+=1;
    remaining.innerHTML = `${11-numGuess}`;   
}

function displayM(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){
    const newGButton = document.querySelector("#newGame")
    newGButton.addEventListener("click",function(e){
        let randomNuber = parseInt(Math.random()*100+1);
        preGuess= []
        numGuess = 1
        guessSlot.innerHTML= ''
        lowOrHi.innerHTML =''
        remaining.innerHTML = `${11-numGuess}`; 
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true
    })
}