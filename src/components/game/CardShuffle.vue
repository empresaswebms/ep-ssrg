<template>
    <div id="gameBoard">
        <div id="gameTable" class="container">
            <div class="row">
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
            </div>
            <div class="row">
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
            </div>
            <div class="row">
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
                <div class="tarjeta col-3 flipped"></div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
//variables

//array of images
var images = [
            "images/cards/elevapuertas.jpg","images/cards/elevapuertas2.jpg",
            "images/cards/elevador.jpg", "images/cards/whatsapp.jpg",
            "images/cards/instagram.jpg", "images/cards/facebook.jpg"
        ];
var imagesArr = images.concat(images); 

var counterImage;
var table
var cells

//shuffle array of images
// imagesArr =  shuffle(imagesArr);
onMounted(()=>{
    
    // message after winning
    var congratsMessage = document.createElement("h2");
    congratsMessage.innerHTML = "Felicitaciones. Completaste el juego. ¡Siguenos!";
    
    // message after winning
    var newGameBtn = document.createElement("button");
    newGameBtn.innerHTML = "Nuevo juego";
    newGameBtn.addEventListener("click",newGame);
     //table elements
     table = document.getElementById('gameTable');
     cells = document.querySelectorAll(".tarjeta");
     newGame();
 })

//start new game
function newGame(){
  
  //shuffle array of images
  imagesArr =  shuffle(imagesArr);
  counterImage=0;

  //if this is not the first game, remove message and button
  if(cells[0].children.length == 1){
    document.body.removeChild(congratsMessage);
    document.body.removeChild(newGameBtn);
  }
  //run all cells of table
  for (let cell of cells) 
  {
    //if this is not the first game, remove old pic
    if(cell.children.length == 1){
      cell.removeChild(cell.getElementsByTagName("img")[0]);
      cells[counterImage].className = "flipped";
    }  
    //create image and add to cell, add eventListener
    var currentImage = document.createElement("img");
    currentImage.src = imagesArr[counterImage];
    currentImage.style.visibility = "visible";
    cell.appendChild(currentImage);
    cell.addEventListener('click', clickedCard);
    counterImage++;
  }
 
 }

//shuffle array of images
function shuffle(array) 
{
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    
    return array;
}

// Change not selected card events
function addOrRemoveEvent(addOrRemove){
  //if true then add back eventListener to all other cards
  //if false then remove eventListener from all other cards
  if(addOrRemove)
  {
    for(let i = 0; i < document.getElementsByClassName("flipped").length; i++){
      document.getElementsByClassName("flipped")[i].addEventListener("click",clickedCard);
    }
  }
  else{
    for(let i = 0; i < document.getElementsByClassName("flipped").length; i++){
      document.getElementsByClassName("flipped")[i].removeEventListener("click",clickedCard);
    }
  } 
}


//if card is chosed
function clickedCard(){
  //change class of selected card, show card and remove eventListener
  this.className = "visible";
  this.removeEventListener("click",clickedCard);
  this.getElementsByTagName("img")[0].style.visibility = "visible";
  //check if there are 2 cards that have been chosen check match
  if(document.getElementsByClassName("visible").length == 2)
  {
    addOrRemoveEvent(false);
    const myTimeout = setTimeout(check, 1000);
    function check() 
    {
      checkMatch();
    } 
  }
}

//check if the selected cards are identical
function checkMatch(){
  // if the src of the 2 card is identical
  if(document.getElementsByClassName("visible")[0].children[0].src === document.getElementsByClassName("visible")[1].children[0].src)
  {
    //identical - remove eventListener and change class to hidden
    document.getElementsByClassName("visible")[1].removeEventListener("click",clickedCard);
    document.getElementsByClassName("visible")[0].removeEventListener("click",clickedCard);
    document.getElementsByClassName("visible")[1].className = "hidden";
    document.getElementsByClassName("visible")[0].className = "hidden";
  }
  else
  {
    //not identical - add back eventListener and change back class to flipped
    document.getElementsByClassName("visible")[1].addEventListener("click",clickedCard);
    document.getElementsByClassName("visible")[0].addEventListener("click",clickedCard);
    document.getElementsByClassName("visible")[1].className = "flipped";
    document.getElementsByClassName("visible")[0].className = "flipped";
  }
  // add back to all cards eventListener
  addOrRemoveEvent(true);
  //if game is finished
  if(document.getElementsByClassName("flipped").length == 0)
  {
    document.body.insertBefore(congratsMessage, document.body.children[1]);
    document.body.insertBefore(newGameBtn, document.body.children[2]);
  }
}

</script>

<style lang="scss" scoped>


/* can't see the image but can see the card */
.flipped{
    height: auto;
    background-color: lightgray;
    background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAHYAWIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9MKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAorB8batc6LoL3NqwSYOqhioPU+9cxZ6h43vrWK4gjR4ZF3I2IhkeuCaAPRaK8/8AN8ef88U/OH/GjzfHn/PFPzh/xoA9AoqhoTXzaTAdTULfYPmAYx9446cdMVg+KPEN9pfiTSLO3kVYLhkEilAc5fB5+lAHW0UUUAFFFYnjLVLjR/D9xdWrBJlKgMVBxlgDwaAN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AH6P/wAVQBt6x8P9K1eRpQjWkzHJaAgA/UHj8qzrf4U6dHKGluriVB/AMLn6nFVf7e8Z/wDQLT/v0f8A4qj+3vGf/QLT/v0f/iqAO4sbC3022W3tYVhhXoqj9fc1Yrh9P1rxbNqFqlzpyx27SqJWEWMKSMnr6V3FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z');
    background-size: contain;
    background-repeat: no-repeat;
    // border: 5px solid black;
    content-visibility: hidden;
}

/* can't see image and card */
.hidden{
    background-color: white;
    border: 0px;
    content-visibility: hidden;
}


/* can see the image but can't see the card */
.visible{
    content-visibility:visible;
    visibility: visible;
}

</style>