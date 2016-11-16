/*
    Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. At each position of the 
    grid there is either a space or a “#” character. The characters should 
    form a chess board.

    Passing this string to console.log should show something like this:

     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
    
    When you have a program that generates this pattern, define a variable 
    size = 8 and change the program so that it works for any size, outputting 
    a grid of the given width and height.
*/

function grid(size, cellSigns) {
    var cells = size*size;
    var grid = '';
    cellSigns = cellSigns || [' ', '#'];
        
    var isNewRow = function(row, col) {
        return row > 0 && col === 0;
    };
    
    var getRow = function(cell) {
        return Math.floor(cell/size);
    };
    
    var getCol = function (cell) {
        return cell%size;
    };
    
    var getCellSign = function (row, col) {
        var evenRow = row % 2 === 0;
        var evenCol = col % 2 === 0;
        
        return (evenRow && evenCol) || (!evenRow && !evenCol) ? cellSigns[0] : cellSigns[1];
    };

    for (var cell=0;cell<cells;cell++) {
        var row = getRow(cell)
        var col = getCol(cell);
        
        if (isNewRow(row, col)) {
            grid += '\n';
        }
        
        grid += getCellSign(row, col);
    }
    
    return {
        getRow: getRow,
        getCol: getCol,
        toString: function() {
            return grid;
        }
    };
}

var chessBoard = grid(8);
console.log(chessBoard.toString());