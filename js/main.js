
// event listeners
// game in progress?
// which players turn is it (change player piece color)
// player choose x's or o's
// win conditions
// draw condition
// restart
// local storage player score
// make sure you cannot override players piece





// let divs = Array.from(document.querySelectorAll('div'))

// let counter = 0


// let squares = divs.map(item => item.addEventListener('click', function(event){
//     event.target.innerText = 'X'
// }))


// tracker for how determining which piece is in play 
let counter = 0
let isX = true

// modal stuff
let popup = document.querySelector(".popup"),
button = document.querySelector("#restart");




class TicTacToe {
  constructor() {

    this.board = Array.from(document.querySelectorAll('div'))
    this.board.forEach(item => item.addEventListener('click', this.handlePlayer))
    // this.board.forEach(item => item.addEventListener('click', this.checkWin))
  }


  
// Win conditions
  checkWin = () => {


    if (this.board[0].innerText === this.board[1].innerText && this.board[1].innerText === this.board[2].innerText && this.board[0].innerText) {
      console.log(`${this.board[0].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[0].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
  
    } 
    else if (this.board[3].innerText === this.board[4].innerText && this.board[4].innerText === this.board[5].innerText && this.board[3].innerText) {
      console.log(`${this.board[3].innerText} wins!`)
      console.log(`${this.board[3].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[3].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }
     else if (this.board[6].innerText === this.board[7].innerText && this.board[7].innerText === this.board[8].innerText && this.board[6].innerText) {
      console.log(`${this.board[6].innerText} wins!`)
      console.log(`${this.board[6].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[6].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }
     else if (this.board[2].innerText === this.board[4].innerText && this.board[4].innerText === this.board[6].innerText && this.board[2].innerText) {
      console.log(`${this.board[2].innerText} wins!`)
      console.log(`${this.board[2].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[2].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }
     else if (this.board[0].innerText === this.board[4].innerText && this.board[4].innerText === this.board[8].innerText && this.board[0].innerText) {
      console.log(`${this.board[0].innerText} wins!`)
      console.log(`${this.board[0].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[0].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }
     else if (this.board[0].innerText === this.board[3].innerText && this.board[3].innerText === this.board[6].innerText && this.board[0].innerText) {
      console.log(`${this.board[0].innerText} wins!`)
      console.log(`${this.board[0].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[0].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }
     else if (this.board[1].innerText === this.board[4].innerText && this.board[4].innerText === this.board[7].innerText && this.board[1].innerText) {
      console.log(`${this.board[1].innerText} wins!`)
      console.log(`${this.board[1].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[1].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }
     else if (this.board[2].innerText === this.board[5].innerText && this.board[5].innerText === this.board[8].innerText && this.board[2].innerText) {
      console.log(`${this.board[2].innerText} wins!`)
      console.log(`${this.board[2].innerText} wins!`)
      document.querySelector('#winner').innerText = `${this.board[2].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }else{ //DRAW CONDITION
      counter++
      if(counter === 9){
        document.querySelector('#winner').innerText = 'tie game'
        modal.openPop()
        document.querySelector('#restart').addEventListener('click', this.restart)
      }
      
    }



  }


  // restart game

  // temporary restart until I can figure out how to actually restart the game lol

  restart = (e) => {
    window.location.reload()
    // this.board.forEach(item => item.innerText = '')
    // popup.style.display = "none";
    // counter = 0
    // isX = true

    // set isX to false
    // text must be erased
    // counter gets set to 0
    // modal closes
  }


  // determining player piece. Alternates between X's and O's
  handlePlayer = (e) => {

    if(e.target.innerText){
      return
    }

    if (isX) {
      e.target.innerText = 'X'
      e.target.style.color = '#e31170'
      e.target.style.fontSize = '7rem'
      isX = false
    } else {
      e.target.innerText = 'O'
      e.target.style.color = '#c89731'
      e.target.style.fontSize = '7rem'
      isX = true
    }
    this.checkWin()

  }

  // // placing player pieces

  // placePiece(event){
  //   this.event = document.querySelector('#3')
  // }
}


let board1 = new TicTacToe()


// class Player{
//   constructor(piece){
//     this.piece = piece
//   }
// }



// modal



let modal = {
 


    openPop(){
      popup.style.display = "Block";
    },



  //  closePop(e){
  //     if(e.target == popup) {
  //     popup.style.display = "none";
  //  }

}



// button.addEventListener("click", openPop);



// Add restart button to this
// window.addEventListener("click", closePop);

// closePop(e){
//   if(e.target == popup) {
//   popup.style.display = "none";
// }
// }



