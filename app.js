function age(){
    var userInput = prompt("Enter your age");
    if(userInput >= 18){
        alert("Now you are an adult!");
    }
    else if(userInput <= 18){
        alert("You are not an adult!");    
    }
}
function checkAddress(){
    if(document.getElementById(email).value === ""){
        alert("Email address required.");
    }
}

function getName(){
    var name = document.getElementById("name");
    alert(name.value);
}

// DOM HTML practice questions
function changeStyle(){
    para.style.fontSize = "2em";
    para.style.fontStyle = "italic";
    para.style.color = "red";
}


function setBgColor(){
    text.style.backgroundColor = "pink";
}


// method#1 readmore
function changeText(){
    var paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, earum impedit Voluptates, dicta expedita Corporis aut est exercitationem, soluta voluptatem fugit eligendi neque hic amet et ipsa, id vitae asperiores!"
    var para = document.getElementById("para");
    para.innerHTML = paragraph;
}


// method#2 read more
function changeText(){
    var text = document.getElementById("text").innerHTML;
    var paragraph= document.getElementById("para");
    paragraph.innerHTML = text;
}



function DisappearImage(){
      var babyImage = document.getElementById("babyimg");
      babyImage.className = "hidden";
}


function changeImageWidth(){
    var babyImage = document.getElementById("babyimg");
    babyImage.className += " width";
}


// Method#1  swapping images`ex#1
function changeImage(){
    var changeBabyImage = document.getElementById("babyimg2");
    changeBabyImage.src = "baby img.jpg";
}
function changeImageBefore(){
    var changeBabyImage = document.getElementById("babyimg2");
    changeBabyImage.src = "baby img2.jpg"
}



// Method#1  swapping images`ex#2
function changeImage(){
    var flowerImage = document.getElementById("beforepic");
    flowerImage.src = "afterpic.jpg";
}
function changeImageFlower(){
    var flowerImage = document.getElementById("beforepic");
    flowerImage.src = "beforepic.jpeg";
}


// Method#2  swapping images`
function changeImage(id,src){
    var flowerImage = document.getElementById(id);
    flowerImage.src = src;
}