import { dogsData } from "./data.js";
import { Dogs } from "./dog.js";

let currentDogIndex=0;
let isWaiting=false;

function nope() {
    if(!isWaiting) {
        isWaiting = true;
        currentDog.hasBeenSwiped = true;
        currentDog.hasBeenLiked = false;
        render()
        setTimeout(() => {
            getNewDog();
            isWaiting = false;
            render();
        }, 1000);     
    };
};

function like() {
    if(!isWaiting) {
        isWaiting = true;
        currentDog.hasBeenSwiped = true;
        currentDog.hasBeenLiked = true; 
        render();
        setTimeout(() => { 
            getNewDog() 
            isWaiting = false
            render()
        }, 1000);    
    };   
};

function getNewDog(){
    currentDogIndex++;
    if(currentDogIndex===3){
        currentDogIndex=0;
    };
    currentDog = new Dogs(dogsData[currentDogIndex])
};

function render() {
    document.getElementById("dog-profile").innerHTML=currentDog.getDogHtml();
};

let currentDog= new Dogs(dogsData[currentDogIndex]);

document.getElementById("nope-btn").addEventListener("click", nope);
document.getElementById("like-btn").addEventListener("click", like);

render();