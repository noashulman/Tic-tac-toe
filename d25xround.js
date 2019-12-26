class Game {
    constructor() {
        this.board = new Board();
        this.initListeners()
        this.tic = "X"
        this.tac = "o"
        this.currentTurn = this.tic
        this.scorePlayer1 = 0
        this.scorePlayer2 = 0
    }
    initApp() {

    }

    initListeners() {
        for (let i = 0; i < this.board.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
            this.cells[i][j].addEventListener("click", (e) => {this.onBoardClick(e)})
            
        }

        
        }
    }
    onBoardClick() {
        if(e.target.innerHTML.trim()===""){
            e.target.innerHTML = this.currentTurn;
            this.currentTurn= this.currentTurn===this.tic?this.tac:this.tic;
        }
    }

    checkRows(currentTurn) {
        for (let i = 0; i < this.cells.length; i++) {
            if(this.cells[i][0].innerHTML === currentTurn&&
            this.cells[i][1].innerHTML === currentTurn&&
            this.cells[i][2].innerHTML === currentTurn){
        }return true
        }
        return false
    }

    chkeckColumns(currentTurn) {
        for (let i = 0; i < this.cells.length; i++) {
            if (this.cells[0][i].innerHTML === currentTurn&&
            this.cells[1][i].innerHTML === currentTurn&&
            this.cells[2][i].innerHTML === currentTurn){
        }return true
        }
        return false
    }

    checkDiagonal() {

    }
}

class Board {
    constructor() {
        this.cells = [];
        this.cells.push([]);
        // this.cells[0][0] = $(".row:nth-child(1) .cell:nth-child(1)");
        // this.cells[0][1] = $(".row:nth-child(1) .cell:nth-child(2)")
        // this.cells[0][2] = $(".row:nth-child(1) .cell:nth-child(3)")
        // this.cells.push([]);
        // this.cells[1][0] = $(".row:nth-child(2) .cell:nth-child(1)");
        // this.cells[1][1] = $(".row:nth-child(2) .cell:nth-child(2)")
        // this.cells[1][2] = $(".row:nth-child(2) .cell:nth-child(3)")
        // this.cells.push([]);
        // this.cells[2][0] = $(".row:nth-child(3) .cell:nth-child(1)");
        // this.cells[2][1] = $(".row:nth-child(3) .cell:nth-child(2)")
        // this.cells[2][2] = $(".row:nth-child(3) .cell:nth-child(3)")

        this.cells.push($(".row"))
        for (let i = 0; i < 3; i++) {
            this.cells[i] = $(`.row:nth-child(${i + 1}) .cell`)

        }
    }

}


    