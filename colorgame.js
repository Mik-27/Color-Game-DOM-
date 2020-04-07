var numSquares = 6;
var colors = [];
var colorPicked;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// Initialize the starting screen
function init() {
    setUpModeButtons();
    setUpSquares();
    resetMode();
}

function setUpModeButtons() {
    // Selecting between the modes and getting the squares accordingly
    // Combining the two mode rather than writing code for indivisually for each button
    for(var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            resetMode();
        });
    }
}

function setUpSquares() {
    for(var i=0; i<squares.length; i++) {
        // Apply colors to the squres from the list of colors
        squares[i].style.backgroundColor = colors[i];
    
        // Add click listeners to the squares
        squares[i].addEventListener("click", function() {
            // Store clicked color
            var clickedColor = this.style.backgroundColor;
            // Compare color with picked color
            // console.log(clickedColor, colorPicked);
            if(clickedColor === colorPicked) {
                message.style.color = colorPicked;
                message.textContent = "Correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again?";
            }
            else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function resetMode() {
    // Generate random colors and store them in colors array
    colors = generateRandomColors(numSquares);
    // Randomly choose a color that is the answer
    colorPicked = pickColor();
    // Display the RGB of the color in the h1.
    colorDisplay.textContent = colorPicked;
    // Set the squares with the new array of colors
    for(var i=0; i<squares.length; i++) {
        // Chack if there is a next color in the colors array
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        // Reset all the remaining styles back to normal
        h1.style.backgroundColor = "steelblue";
        message.style.color = "black";
        message.textContent = "";
        reset.textContent = "New Colors";
    }
}

// var easyBtn = document.getElementById("easyBtn");
// var hardBtn = document.getElementById("hardBtn");

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     colorPicked = pickColor();
//     colorDisplay.textContent = colorPicked;
//     for(var i=0; i<squares.length; i++) {
//         // Chack if there is a next color in the colors array
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     colorPicked = pickColor();
//     colorDisplay.textContent = colorPicked;
//     for(var i=0; i<squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

reset.addEventListener("click", resetMode);
    // // Generate all new random colors
    // colors = generateRandomColors(numSquares);
    // // Pick a random color from the array
    // colorPicked = pickColor();
    // // Set colorDisplay equal to the picked color
    // colorDisplay.textContent = colorPicked;
    // // Set the squares with the new array of random colors
    // for(var i=0; i<squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // // Change the remaining things back to normal
    // h1.style.backgroundColor = "steelblue";
    // message.textContent = "";
    // this.textContent = "New Colors";
    // message.style.color = "black";

colorDisplay.textContent = colorPicked;

// for(var i=0; i<squares.length; i++) {
//     // Apply colors to the squres from the list of colors
//     squares[i].style.backgroundColor = colors[i];

//     // Add click listeners to the squares
//     squares[i].addEventListener("click", function() {
//         // Store clicked color
//         var clickedColor = this.style.backgroundColor;
//         // Compare color with picked color
//         // console.log(clickedColor, colorPicked);
//         if(clickedColor === colorPicked) {
//             message.style.color = colorPicked;
//             message.textContent = "Correct!";
//             changeColor(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//             reset.textContent = "Play Again?";
//         }
//         else {
//             message.textContent = "Try Again";
//             this.style.backgroundColor = "#232323";
//         }
//     });
// }

function changeColor(color) {
    // Change the color for each of the squares
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // console.log(colors[Math.floor(Math.random() * colors.length + 1)]);
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    var arr = []
    for(var i=0; i<num; i++) {
        // Get random RGB color and push them onto the array
        arr.push(randomColor());
    }
    return  arr;
}

function randomColor() {
    // Get each of Red, Green and Blue random values b/w 0 - 255 to form a color
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb("+red+", "+green+", "+blue+")";
}

// Note: This code can be structured by including each function and variables in an object and to call the functions at the end of the declaration of object.