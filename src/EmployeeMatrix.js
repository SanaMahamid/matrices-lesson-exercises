/* Write your code below */
const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix{
    constructor(){
        super()
    }

    loadData(salaryData){
        this.matrix = []
        for(let i=0 ; i<salaryData.length; i++){
            this.matrix.push(Object.values(salaryData[i]))
        }
    }

    getEmployees(department){
        return this.matrix.filter(r => r[2] === department).map(r => r[1])
    }

    getTotalSalary(department) {
	    let sum = 0
	    this.matrix.filter(row => row[2] === department)
	      .forEach(row => sum += row[3])
	    return sum
      }
      
      findRichest() {
	

	    let highestSalary = 0
	    let name = ''
	

	    for (let i = 0; i < this.matrix.length; i++) {
	      if (this.matrix[i][3] > highestSalary) {
	        name = this.matrix[i][1]
	        highestSalary = this.matrix[i][3]
	      }
	    }
	

	    return name
	  }


}




//You can paste the code from the lesson below to test your solution

/*let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()
//prints

/*
e10021  Gillian Finance 2000
e10725  Tibor   Design  1200
e10041  Anisha  Finance 2300
e10411  Jakub   Design  1600
e11995  Mar     Design  1300
e10732  Nisha   Design  1200
*/
/*
console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
*/





/* Do not remove the exports below */
module.exports = EmployeeMatrix