class SalaryProgrammer {
  constructor(initalBalance) {
    this.initalBalance = initalBalance;
  }

  increase(value) {
    this.initalBalance = this.initalBalance + value // += value
  }

  withdrawal(value) {
    if(value <= this.initalBalance) {
      this.initalBalance = this.initalBalance - value //-= value
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return console.log(this.initalBalance)
  }
}


const mySalary = new SalaryProgrammer(10000)
mySalary.increase(2000)
mySalary.withdrawal(8000)
mySalary.getBalance()