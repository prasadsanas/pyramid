// Pyramid Play

function pyramid(level) {
    dots = level;
    for (var i = 1; i <= level; i++){
        var string = "";
        for (var k = 0; k <= dots - i; k++){
            string = string + ".";
        }
        for (var j = 1; j <= i; j++){
            string = string + "O";
            string = string + ".";
        }
        for (var k = 0; k <= dots-1 - i; k++){
            string = string + ".";
        }
        console.log(string);
    }
    return string;
}

function inverse_pyramid(level) {
    dots = level;
    for (var i = 1; i <= level; i++){
        var string = "";
        for (var k = level; k > dots - i; k--){
            string = string + ".";
        }
        for (var j = level; j >= i; j--){
            string = string + "O";
            string = string + ".";
        }
        for (var k = level; k > dots - i +1; k--){
            string = string + ".";
        }
        console.log(string);
    }
    return string;
}

function rhombus(level) {
    dots = level;
    for (var i = 1; i <= level; i++){
        var string = "";
        for (var k = 0; k <= dots - i; k++){
            string = string + ".";
        }
        for (var j = 1; j <= i; j++){
            string = string + "O";
            string = string + ".";
        }
        for (var k = 0; k <= dots-1 - i; k++){
            string = string + ".";
        }
        console.log(string);
    }
    for (var i = 1; i < level; i++){
        var string = "";
        for (var k = level; k >= dots - i; k--){
            string = string + ".";
        }
        for (var j = level-1; j >= i; j--){
            string = string + "O";
            string = string + ".";
        }
        for (var k = level; k >= dots - i+1 ; k--){
            string = string + ".";
        }
        console.log(string);
    }
}


// pyramid(4);
// console.log("");
// inverse_pyramid(4);
// console.log("");
// rhombus(4);

function playPyramid(level, shape) {
    if (shape == "pyramid") {
        pyramid(level);
    }else if (shape == "inverse_pyramid") {
        inverse_pyramid(level);
    } else {
        rhombus(level);
    }
}

playPyramid(4, "pyramid");
console.log("")

playPyramid(4, "inverse_pyramid");
console.log("")

playPyramid(4, "rhombus");
console.log("")