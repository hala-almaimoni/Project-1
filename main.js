// get the input
// save the value
// check for the inputs 
// matching one row
// return the winner
// enable to insert in unempty box
// enable to insert after the game


let input = "O"
let xScore = 0
let oScore = 0

let gameOver = false;

var tableCells = {
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
    cell9: ""
}

var randomArray = []
var rand = ''

function twoPlayers(event) {

    var test = event.target


    if ($(test).text() === "" && gameOver === false) {

        if (input === "O") {
            $(test).text('X')
            input = "X"
            tableCells[test.id] = input


        } else if (input === "X") {
            $(test).text('O')
            input = "O"
            tableCells[test.id] = input

        }
        result();

    }
}

function onePlayer(event) {
    var test = event.target


    if ($(test).text() === "" && gameOver === false) {
        input = 'X'

        $(test).text(input)

        tableCells[test.id] = input

        random()

        input = 'O'
        $('#' + rand).text(input)
        tableCells[rand] = input

        result();
    }




}



function random() {

    randomArray = [];
    for (var key in tableCells) {

        if (tableCells[key] === "" && key !== undefined) {
            if (key === "undefined") {
                debugger;
            }

            randomArray.push(key)
        }
        rand = randomArray[Math.floor(Math.random() * randomArray.length)];

    }
}



$('#reset-button').on('click', reload);



$('input[type=radio][name=exampleRadios]').change(function () {

    $('td').off('click')
    if (this.id === 'two-player') {
        console.log(this.id)
        $('td').on('click', twoPlayers);
    }
    else if (this.id === 'one-player') {
        $('td').on('click', onePlayer);
        console.log(this.id)
    }
})


function result() {

    if (tableCells.cell1 !== "" && tableCells.cell1 === tableCells.cell2 && tableCells.cell2 === tableCells.cell3) {

        alert(tableCells.cell1 + ' Winner')

        if (tableCells.cell1 === "X") {
            xScore++
        }
        else if (tableCells.cell1 === "O") {
            oScore++
        } gameOver = true

    } else if (tableCells.cell4 !== "" && tableCells.cell4 === tableCells.cell5 && tableCells.cell5 === tableCells.cell6) {

        alert(tableCells.cell4 + ' Winner')



        if (tableCells.cell4 === "X") {
            xScore++
        }
        else if (tableCells.cell4 === "O") {
            oScore++
        } gameOver = true

    } else if (tableCells.cell7 !== "" && tableCells.cell7 === tableCells.cell8 && tableCells.cell8 === tableCells.cell9) {

        alert(tableCells.cell7 + ' Winner')

        if (tableCells.cell7 === "X") {
            xScore++
        }
        else if (tableCells.cell7 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell1 !== "" && tableCells.cell1 === tableCells.cell5 && tableCells.cell5 === tableCells.cell9) {

        alert(tableCells.cell1 + ' Winner')

        if (tableCells.cell1 === "X") {
            xScore++
        }
        else if (tableCells.cell1 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell3 !== "" && tableCells.cell3 === tableCells.cell5 && tableCells.cell5 === tableCells.cell7) {

        alert(tableCells.cell3 + ' Winner')

        if (tableCells.cell3 === "X") {
            xScore++
        }
        else if (tableCells.cell3 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell1 !== "" && tableCells.cell1 === tableCells.cell4 && tableCells.cell4 === tableCells.cell7) {

        alert(tableCells.cell1 + ' Winner')

        if (tableCells.cell1 === "X") {
            xScore++
        }
        else if (tableCells.cell1 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell3 !== "" && tableCells.cell3 === tableCells.cell6 && tableCells.cell6 === tableCells.cell9) {

        alert(tableCells.cell3 + ' Winner')

        if (tableCells.cell3 === "X") {
            xScore++
        }
        else if (tableCells.cell3 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell2 !== "" && tableCells.cell2 === tableCells.cell5 && tableCells.cell5 === tableCells.cell8) {

        alert(tableCells.cell2 + ' Winner')

        if (tableCells.cell2 === "X") {
            xScore++
        }
        else if (tableCells.cell2 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell1 !== "" && tableCells.cell2 !== "" && tableCells.cell3 !== "" && tableCells.cell4 !== "" && tableCells.cell5 !== "" && tableCells.cell6 !== "" && tableCells.cell7 !== "" && tableCells.cell8 !== "" && tableCells.cell9 !== "") {

        alert('Its a tie')
        gameOver = true

    }
    $('#x').text(xScore);
    $('#o').text(oScore);
}

function reload() {

    $('td').text('')

    tableCells = {
        cell1: "",
        cell2: "",
        cell3: "",
        cell4: "",
        cell5: "",
        cell6: "",
        cell7: "",
        cell8: "",
        cell9: ""
    }
    gameOver = false;
    input = 'O'


}


