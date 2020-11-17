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

        Swal.fire({
            title: tableCells.cell1 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })

        if (tableCells.cell1 === "X") {
            xScore++
        }
        else if (tableCells.cell1 === "O") {
            oScore++
        } gameOver = true

    } else if (tableCells.cell4 !== "" && tableCells.cell4 === tableCells.cell5 && tableCells.cell5 === tableCells.cell6) {



        Swal.fire({
            title: tableCells.cell4 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })

        if (tableCells.cell4 === "X") {
            xScore++
        }
        else if (tableCells.cell4 === "O") {
            oScore++
        } gameOver = true

    } else if (tableCells.cell7 !== "" && tableCells.cell7 === tableCells.cell8 && tableCells.cell8 === tableCells.cell9) {


        Swal.fire({
            title: tableCells.cell7 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })
        if (tableCells.cell7 === "X") {
            xScore++
        }
        else if (tableCells.cell7 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell1 !== "" && tableCells.cell1 === tableCells.cell5 && tableCells.cell5 === tableCells.cell9) {


        Swal.fire({
            title: tableCells.cell1 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })
        if (tableCells.cell1 === "X") {
            xScore++
        }
        else if (tableCells.cell1 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell3 !== "" && tableCells.cell3 === tableCells.cell5 && tableCells.cell5 === tableCells.cell7) {


        Swal.fire({
            title: tableCells.cell3 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })
        if (tableCells.cell3 === "X") {
            xScore++
        }
        else if (tableCells.cell3 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell1 !== "" && tableCells.cell1 === tableCells.cell4 && tableCells.cell4 === tableCells.cell7) {


        Swal.fire({
            title: tableCells.cell1 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })
        if (tableCells.cell1 === "X") {
            xScore++
        }
        else if (tableCells.cell1 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell3 !== "" && tableCells.cell3 === tableCells.cell6 && tableCells.cell6 === tableCells.cell9) {


        Swal.fire({
            title: tableCells.cell3 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })
        if (tableCells.cell3 === "X") {
            xScore++
        }
        else if (tableCells.cell3 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell2 !== "" && tableCells.cell2 === tableCells.cell5 && tableCells.cell5 === tableCells.cell8) {


        Swal.fire({
            title: tableCells.cell2 + ' is the winner!!',
            width: 620,
            padding: '187px 0 210px 285px',
            background: '#fff url(https://media1.tenor.com/images/66286c21e00a4ef6707abb4bfe19dcb3/tenor.gif?itemid=5043292) no-repeat',
            backdrop: `
      rgba(0,0,123,0.4)
      
    `
        })

        if (tableCells.cell2 === "X") {
            xScore++
        }
        else if (tableCells.cell2 === "O") {
            oScore++
        } gameOver = true
    } else if (tableCells.cell1 !== "" && tableCells.cell2 !== "" && tableCells.cell3 !== "" && tableCells.cell4 !== "" && tableCells.cell5 !== "" && tableCells.cell6 !== "" && tableCells.cell7 !== "" && tableCells.cell8 !== "" && tableCells.cell9 !== "") {
        Swal.fire({

            width: 400,
            padding: '225px 0 44px 0',
            background: '#fff url(http://www.reactiongifs.com/r/2013/02/tied.gif) no-repeat',

            'background-position-x': 'center',
            backdrop: `
              rgba(0,0,123,0.4)
              
            `
        })

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


$('body').css(
    'background', 'url(Music-background.jpg) no-repeat')