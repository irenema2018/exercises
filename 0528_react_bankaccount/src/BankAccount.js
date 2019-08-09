import React from 'react';
//              template
export default class BankAccount extends React.Component {
  
  constructor (props) {
    super()
    
    this.getType = this.getType.bind(this)
    this.withdraw = this.withdraw.bind(this)
    this.deposit = this.deposit.bind(this)
    this.showBalance = this.showBalance.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      type: props.type,
      balance: 0,
      transactionHistory: [],
      amount: 0
    }
  }

  getType () {
    return this.state.type
  }

  withdraw () {
    this.setState({
      balance: Number(this.state.balance) - Number(this.state.amount),
      // [...arr, newElement]
      transactionHistory: [...this.state.transactionHistory, 'Withdraw [' + this.state.amount + ']' ]
    })   
  }

  deposit () {
    this.setState({
      balance: Number(this.state.balance) + Number(this.state.amount),
      transactionHistory: [...this.state.transactionHistory, 'Deposit [' + this.state.amount + ']' ]
    })   
  }  

  showBalance () {
    return this.state.balance
  }
  
  handleChange (event) {
    this.setState({
      amount: event.target.value
    })
  }
    
  render () {
    return (
      <div>
        <p>Bank Account Type: {this.getType()}</p>
        <input 
          type="text"
          onChange={this.handleChange}
          value={this.state.amount}
        />
        <button onClick={this.withdraw}>Withdraw</button>
        <button onClick={this.deposit}>Deposit</button>
        <p>Current Balance: {this.showBalance()}</p>
        <p>Transaction History: {this.state.transactionHistory.join(', ')}</p>
      </div>
    )
  }
}