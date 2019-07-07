import React from 'react'

export default class TweetBox extends React.Component {
  // transform class property
  // constructor () {
  //   super()
        // this.state = {
  state = {
      balance: 0,
      amount: 0
    }

  // }
  
  handleChange = event => { // arrow function can replace bind function in constructor
    this.setState({
      amount: event.target.value
    })
  }
  
  handleClick = () => {
    this.setState ({
      balance: Number(this.state.amount) + this.state.balance
      //       +this.state.amount
    })
  }


  render () {
    const {balance, amount} = this.state
    return <div>
      <output>${balance}</output>
      <input onChange={this.handleChange} type="text" value={amount}/>
      <button onClick={this.handleClick}>deposit</button>
    </div>
  }



}