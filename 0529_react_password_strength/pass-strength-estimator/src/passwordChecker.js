import React from 'react'
import checkPassword from './checkPassword.js'

export default class PasswordChecker extends React.Component {
  // constructor() {
  //   super()
    
    // this.handleChange = this.handleChange.bind(this)

  state = {
      strength: ''
    }
  // }

  handleChange = event => {
    let result = checkPassword(event.target.value)

    if (result.score === 6) {
      this.setState({ strength: 'strong' })
    }
    else if (result.score >= 4) {
      this.setState({ strength: 'ok' })
    }
    else if (result.score >= 2) {
      this.setState({ strength: 'weak' })
    }    
    else {
      this.setState({ strength: 'very weak' })
    }        
  }
  
  render() {
    return (
      <div>
        <input 
          type="text"
          onChange={this.handleChange}
        />
        <p>Password Strength: {this.state.strength}</p>
      </div>
    )
  }
}
