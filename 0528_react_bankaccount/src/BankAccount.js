import React, { useState } from 'react';


export default function BankAccount (props) {
// export default class BankAccount extends React.Component {
  
  // constructor (props) {
  //   super()
    
  //   this.getType = this.getType.bind(this)
  //   this.withdraw = this.withdraw.bind(this)
  //   this.deposit = this.deposit.bind(this)
  //   this.showBalance = this.showBalance.bind(this)
  //   this.handleChange = this.handleChange.bind(this)

  //   this.state = {
  //     type: props.type,
  //     balance: 0,
  //     transactionHistory: [],
  //     amount: 0
  //   }
  // }

  const [balance, setBalance]                       = useState(0)
  const [transactionHistory, setTransactionHistory] = useState([])
  const [amount, setAmount]                         = useState(0)


  // function getType () {
  //   return type
  // }
  // const getType = () => {
  //   // return this.state.type
  //   return type
  // }

  const withdraw = () => {
    // this.setState({
    //   balance: Number(this.state.balance) - Number(this.state.amount),
    //   // [...arr, newElement]
    //   transactionHistory: [...this.state.transactionHistory, 'Withdraw ( ' + this.state.amount + ' )' ]
    // })  
    setBalance(Number(balance) - Number(amount))
    setTransactionHistory([...transactionHistory, 'Withdraw ( ' + amount + ' )' ])
    //                            origianl array       +  new element
  }

  const deposit = () => {
    // this.setState({
    //   balance: Number(this.state.balance) + Number(this.state.amount),
    //   transactionHistory: [...this.state.transactionHistory, 'Deposit (' + this.state.amount + ')' ]
    // })   
    setBalance(Number(balance) + Number(amount))
    setTransactionHistory([...transactionHistory, 'Deposit ( ' + amount + ' )' ])

  }  

  // const showBalance = () => {
  //   // return this.state.balance
  //   return balance
  // }
  
  const handleChange = (event) => {
    // this.setState({
    //   amount: event.target.value
    // })
     setAmount(event.target.value)
  }
    
  // render () {
    return (
      <div>
        {/* <p>Bank Account Type: {this.getType()}</p> */}
        <p>Bank Account Type: {props.type}</p>
        <input 
          type="text"
          // onChange={this.handleChange}
          // value={this.state.amount}
          onChange={handleChange}
          value={amount}
        />
        {/* <button onClick={this.withdraw}>Withdraw</button> */}
        <button onClick={withdraw}>Withdraw</button>
        {/* <button onClick={this.deposit}>Deposit</button> */}
        <button onClick={deposit}>Deposit</button>
        {/* <p>Current Balance: {this.showBalance()}</p> */}
        <p>Current Balance: {balance}</p>
        {/* <p>Transaction History: {this.state.transactionHistory.join(', ')}</p> */}
        <p>Transaction History: {transactionHistory.join(', ')}</p>
      </div>
    )
  // }
}