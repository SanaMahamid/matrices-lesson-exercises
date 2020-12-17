/* Write your code below */
class Matrix{
    constructor(r, c){
        this.matrix = this.generateMatrix(r,c)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    get(rowNum, colNum){
        return this.matrix[rowNum][colNum]
    }

    print(){
        let row = ""
        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<this.matrix[i].length; j++){
                row += this.matrix[i][j] + "\t"
            }
            console.log(row)
            row = ""
        }
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    
    printRow(rowNum){
        let row =""
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            row += this.matrix[rowNum][i] + "\t"
        }
        console.log(row)
    }
        
    alter(rowNum, colNum, value){
        this.matrix[rowNum][colNum] = value
    }

    findCoordinate(value){
        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<this.matrix[i].length; j++){
                if(this.get(i,j) === value){
                    return {x:j, y:i}
                }
            }
        }
        return null
    }

}




//You can paste the code from the lesson below to test your solution
//let m = new Matrix(3, 4)
//m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

/*m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}*/






/* Do not remove the exports below */
module.exports = Matrix