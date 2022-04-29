
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
let counter = 0
let isX = true


class TicTacToe {
  constructor() {

    this.board = Array.from(document.querySelectorAll('div'))
    this.board.forEach(item => item.addEventListener('click', this.handlePlayer))
    // this.board.forEach(item => item.addEventListener('click', this.checkWin))


  }

  checkWin = () => {




    if (this.board[0].innerText === this.board[1].innerText && this.board[1].innerText === this.board[2].innerText && this.board[0].innerText) {
      alert(`${this.board[0].innerText} wins!`)
    } 
    else if (this.board[3].innerText === this.board[4].innerText && this.board[4].innerText === this.board[5].innerText && this.board[3].innerText) {
      alert(`${this.board[3].innerText} wins!`)
    }
     else if (this.board[6].innerText === this.board[7].innerText && this.board[7].innerText === this.board[8].innerText && this.board[6].innerText) {
      alert(`${this.board[6].innerText} wins!`)
    }
     else if (this.board[2].innerText === this.board[4].innerText && this.board[4].innerText === this.board[6].innerText && this.board[2].innerText) {
      alert(`${this.board[2].innerText} wins!`)
    }
     else if (this.board[0].innerText === this.board[4].innerText && this.board[4].innerText === this.board[8].innerText && this.board[0].innerText) {
      alert(`${this.board[0].innerText} wins!`)
    }
     else if (this.board[0].innerText === this.board[3].innerText && this.board[3].innerText === this.board[6].innerText && this.board[0].innerText) {
      alert(`${this.board[0].innerText} wins!`)
    }
     else if (this.board[1].innerText === this.board[4].innerText && this.board[4].innerText === this.board[7].innerText && this.board[1].innerText) {
      alert(`${this.board[1].innerText} wins!`)
    }
     else if (this.board[2].innerText === this.board[5].innerText && this.board[5].innerText === this.board[8].innerText && this.board[2].innerText) {
      alert(`${this.board[2].innerText} wins!`)
    }else{
      counter++
      if(counter === 9){
        document.querySelector('h2').innerText = 'tie game'
      }
      
    }
  }


  handlePlayer = (e) => {

    if(e.target.innerText){
      return alert('cant place here')
    }

    if (isX) {
      e.target.innerText = 'X'
      isX = false
    } else {
      e.target.innerText = 'O'
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









