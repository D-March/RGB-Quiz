var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
};

resetButton.addEventListener("click", function(){
    reset();
});

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        //Add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //Grab color of picked square
            var clickedColor = this.style.backgroundColor;
            //Compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }   else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    };
};
function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                //if button set to Easy then num is 3 else its 6
                this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
};

function changeColors(color){
    //loop through all squares
    for (var i = 0; i < colors.length; i++){

    //change each color to match given color
        squares[i].style.background =  color;
    }
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color and push into array
    };
    //return that array
    return arr;
};

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};


function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for ( var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent= "New Colors";
};

        
        // if(this.textContent === "Easy"){
        //     numSquares = 3;   
        // } else {
        //     numSquares = 6;
        // }


        //figure out how many squares to show
        //pick new colors
        //pick a new picked color
        //update page to reflect changes


// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
    
// });


    // //generate all new colors
    // colors = generateRandomColors(numSquares);
    // //pick a new random color from array
    // pickedColor = pickColor();
    // //change color display to match picked color
    // colorDisplay.textContent = pickedColor;
    // //change colors of squares
    // for ( var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // h1.style.backgroundColor = "steelblue";
    // messageDisplay.textContent = "";
    // this.textContent= "New Colors";
