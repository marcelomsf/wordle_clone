var height = 6; //number of guess
var width = 5; //length of word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
var word ="SQUID";

window.onload = function(){
    intialize();
}

function intialize() {

    //create the game board
    for (let r= 0; r < height; r++ ){
        for (let c = 0; c < width; c++ ){
            // <span id="0-0" class"title">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    //Listen for key Press
    document.addEventListener("keyup", (e) => {
        if(gameOver) return;
       // alert(e.code);
        if("KeyA" <= e.code && e.code <= "KeyZ") {
            if( col < width) {
                let currTile = document.getElementById(row.toString() + "-" + col.toString() );
                if (currTile.innerHTML == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }

            }
        }else if (e.code == "Backspace") {
            //alert(e.code);
            if( 0 < col && col <= width ){
                col -= 1;
            }
            let currTile = document.getElementById(row.toString() + "-" + col.toString() );
            currTile.innerText = "";
        }
    }) 

}
