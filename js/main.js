
// event listeners
// game in progress?
// which players turn is it (change player piece color)
// player choose x's or o's
// win conditions
// draw condition
// restart
// local storage player score
// make sure you cannot override players piece



// tracker for how determining which piece is in play 
let counter = 0
let isX = true

// modal stuff
let popup = document.querySelector(".popup"),
  button = document.querySelector("#restart");



  // local storage
  if(!localStorage.getItem('xScore')){
    localStorage.setItem('xScore', 0)
  }

  if(!localStorage.getItem('oScore')){
    localStorage.setItem('oScore', 0)
  }

  let scoreOfX = Number(localStorage.getItem('xScore'))
  let scoreOfO = Number(localStorage.getItem('oScore'))


  // Display for DOM scores
  let x = document.querySelector('#xScore')
  let o = document.querySelector('#oScore')

  x.innerText = localStorage.getItem('xScore')
  o.innerText = localStorage.getItem('oScore')




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

      // adding local storage scores
    
      if(this.board[0].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[0].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)


      //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')
      

      document.querySelector('#winner').innerText = `${this.board[0].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)


    
    }
    else if (this.board[3].innerText === this.board[4].innerText && this.board[4].innerText === this.board[5].innerText && this.board[3].innerText) {
      console.log(`${this.board[3].innerText} wins!`)
      

      // adding local storage scores
       if(this.board[3].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[3].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)

     //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


      document.querySelector('#winner').innerText = `${this.board[3].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)


    }
    else if (this.board[6].innerText === this.board[7].innerText && this.board[7].innerText === this.board[8].innerText && this.board[6].innerText) {
      console.log(`${this.board[6].innerText} wins!`)

      
// adding local storage scores
      if(this.board[6].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[6].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)

           //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')



      document.querySelector('#winner').innerText = `${this.board[6].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
      
    }
    else if (this.board[2].innerText === this.board[4].innerText && this.board[4].innerText === this.board[6].innerText && this.board[2].innerText) {
      console.log(`${this.board[2].innerText} wins!`)

      
      // adding local storage scores
      if(this.board[2].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[2].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)


           //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


      document.querySelector('#winner').innerText = `${this.board[2].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }

    else if (this.board[0].innerText === this.board[4].innerText && this.board[4].innerText === this.board[8].innerText && this.board[0].innerText) {
      console.log(`${this.board[0].innerText} wins!`)
      

      // adding local storage scores
      if(this.board[0].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[0].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)


           //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


      document.querySelector('#winner').innerText = `${this.board[0].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }

    else if (this.board[0].innerText === this.board[3].innerText && this.board[3].innerText === this.board[6].innerText && this.board[0].innerText) {
      console.log(`${this.board[0].innerText} wins!`)
      

      // adding local storage scores
      if(this.board[0].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[0].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)


           //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


      document.querySelector('#winner').innerText = `${this.board[0].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }

    else if (this.board[1].innerText === this.board[4].innerText && this.board[4].innerText === this.board[7].innerText && this.board[1].innerText) {
      console.log(`${this.board[1].innerText} wins!`)
      

      // adding local storage scores
      if(this.board[1].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[1].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)


           //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


      document.querySelector('#winner').innerText = `${this.board[1].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    }

    else if (this.board[2].innerText === this.board[5].innerText && this.board[5].innerText === this.board[8].innerText && this.board[2].innerText) {

      console.log(`${this.board[2].innerText} wins!`)
      
      
      // adding local storage scores
      if(this.board[2].innerText === 'X'){
        scoreOfX += 1
      }else if(this.board[2].innerText === 'O'){
        scoreOfO += 1
      }
      localStorage.setItem('xScore', scoreOfX)
      localStorage.setItem('oScore', scoreOfO)


           //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


      document.querySelector('#winner').innerText = `${this.board[2].innerText} wins!`
      modal.openPop()
      document.querySelector('#restart').addEventListener('click', this.restart)
    } 
    
    else { //DRAW CONDITION
      counter++
      if (counter === 9) {

          scoreOfX += 0
          scoreOfO += 0
      
        localStorage.setItem('xScore', scoreOfX)
        localStorage.setItem('oScore', scoreOfO)

             //putting scores into DOM
     x.innerText = localStorage.getItem('xScore')
     o.innerText = localStorage.getItem('oScore')


        document.querySelector('#winner').innerText = 'tie game'
        modal.openPop()
        document.querySelector('#restart').addEventListener('click', this.restart)
      }

    }



  }


  // restart game
  // this just reloads the entire window. 
  restart = (e) => {
    window.location.reload()

  }


  // determining player piece. Alternates between X's and O's. Also added some x / o specific styles :)
  handlePlayer = (e) => {

    if (e.target.innerText) {
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

}


let board1 = new TicTacToe()




let modal = {



  openPop() {
    popup.style.display = "Block";
  },


  // closing modal not required

  //  closePop(e){
  //     if(e.target == popup) {
  //     popup.style.display = "none";
  //  }

}



