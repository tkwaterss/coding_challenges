function Connect4 (){
  // Code Here
};

Connect4.prototype.play = function (col){
  
};

class Connect4 {
  constructor() {
      this.board = Array.from({ length: 6 }, () => Array(7).fill(0)); // 6 rows, 7 columns
      this.currentPlayer = 1;
      this.winner = null;
      this.gameOver = false;
  }

  play(column) {
      if (this.gameOver) {
          return "Game has finished!";
      }

      if (this.isColumnFull(column)) {
          return "Column full!";
      }

      const row = this.getNextAvailableRow(column);
      this.board[row][column] = this.currentPlayer;

      if (this.checkWinner(row, column)) {
          this.gameOver = true;
          return `Player ${this.currentPlayer} wins!`;
      }

      this.switchPlayer();
      return `Player ${this.currentPlayer} has a turn`;
  }

  isColumnFull(column) {
      return this.board[0][column] !== 0;
  }

  getNextAvailableRow(column) {
      for (let row = 5; row >= 0; row--) {
          if (this.board[row][column] === 0) {
              return row;
          }
      }
  }

  checkWinner(row, column) {
      const directions = [
          [0, 1], // horizontal
          [1, 0], // vertical
          [1, 1], // diagonal (down-right)
          [1, -1] // diagonal (down-left)
      ];

      for (const [dr, dc] of directions) {
          let count = 1;

          for (let i = 1; i < 4; i++) {
              let r = row + i * dr;
              let c = column + i * dc;

              if (r >= 0 && r < 6 && c >= 0 && c < 7 && this.board[r][c] === this.currentPlayer) {
                  count++;
              } else {
                  break;
              }
          }

          for (let i = 1; i < 4; i++) {
              let r = row - i * dr;
              let c = column - i * dc;

              if (r >= 0 && r < 6 && c >= 0 && c < 7 && this.board[r][c] === this.currentPlayer) {
                  count++;
              } else {
                  break;
              }
          }

          if (count >= 4) {
              return true;
          }
      }

      return false;
  }

  switchPlayer() {
      this.currentPlayer = 3 - this.currentPlayer; // Switch between players 1 and 2
  }
}