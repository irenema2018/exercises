


class BankAccount{

  constructor () {
    this.balance = 0
    this.fee = 1
    this.history = [1,2,3]
  }

  chargeFee () {
    this.balance -= this.fee
  }

  showHistory () {
    this.history.forEach((entry) => {
      console.log(this.fee)
      console.log(entry)
    })
  }

  getType () {
    this // point to the object 
  }

  deposit () {
    this
  }
}

// obj = new BankAccount()
// a2 = new BankAccount()
// a2.chargeFee()
// console.log(a2.balance)
// a2.showHistory()

// _________________________________________________

// function Car () {

// }

// this // window

// Car.prototype.drive = function () {
//   this
// }

// c1 = new Car()
// c2 = new Car()
// c3 = new Car()

// c1.drive()
// c3.drive()
// _________________________________________________

var btn = document.querySelector('button')
btn.addEventListener('click', a2.chargeFee)

// 1. default binding - window - weird & awful
// call the function in the object, points to lcoal.

// 2 .implicit a2.deposit()
//                      call the different function right now
// 3. explicit binding => a2.deposit.call(context)
//                  call the function in the future
// 4.hard binding => newDeposit = a2.deposit.bind() -> new function with the new context binded
// newDeposit()
// 5. constructor function binding,it will overwrite the above 4.

var account = {
  balance: 0,
  deposit: function() {
    console.log(this.balance)
  }
}

// account.deposit()

// var newFunc = account.deposit.bind(account)
// //             ||
// setTimeout(newFunc, 2000)

function getUser () {
  return { username: 'dt', password:'pudding', age: 40}
}

// var obj = getUser()

// var password = obj.password

// authenticate(password)

// object destructuring & object shorthand notation
//                      { username: 'dt', password:'pudding', age: 40}
var {password: pass, username: name } = getUser()
console.log(name, pass)//'dt','pudding' 
// the order doesn't matter for an object
//   ||
//   ||
var {password, username } = getUser()
console.log(username, password)//'dt','pudding'


function getColor () {
  return ['mistyrose','pink']
}

arr = getColor()
arr[0] //'mistyrose'

// pattern match
var [favColor, blah] = getColor() // 'mistyrose', empty string