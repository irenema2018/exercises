import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './Home'
// import CakeTypes from './CakeTypes'
// import About from './About'
// import Vote from './Vote' 
import {Link, Switch, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
  state = {
    cakeTypes:[
      {
        name: 'buttercream',
        cakeBase: 'sponge cake'
      },
      {
        name: 'lightcream',
        cakeBase: 'chiffon cake'
       },
       {
        name: 'bean paste',
        cakeBase: 'cup cake'
       }
    ]
  }

  render() {
    const {cakeTypes} = this.state
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/caketypes">Cake Types</Link> |
          <Link to="/about">About</Link> |
          <Link to="/vote">Vote</Link>
        </nav>

        {/* <Switch> */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/caketypes" render={() => <CakeTypes /> } /> */}
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/vote" component={Vote} /> */}
        {/* </Switch> */}

      </div>
    )
  }

}
