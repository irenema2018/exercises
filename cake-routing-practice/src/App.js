import React from 'react';
import './App.css';
import Home from './Home'
import CakeTypes from './CakeTypes'
import CakeType from './CakeType'
import About from './About'
import Vote from './Vote'
import {Link, Switch, Route} from 'react-router-dom'


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
        name: 'beanpaste',
        cakeBase: 'cup cake'
       }
    ]
  }

  render () {
    const { cakeTypes } = this.state
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/caketypes">Cake Types</Link> |
          <Link to="/about">About</Link> |
          <Link to="/vote">Vote </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          {/* render methods: 1 Route component 2 Route render 3 Route children */}
          {/* render methods will be passed the same three route props. 1.match 2. location 3.history */}
          <Route exact path="/caketypes" render= {() => <CakeTypes cakeTypes={cakeTypes} />} />
          <Route path="/caketypes/:filling" render={
             (props) => <CakeType match={props.match} cakeTypes={cakeTypes} />} />
          <Route path="/about" component={About} />
          <Route path="/vote" component={Vote} />
        </Switch>
      </div>
    )
  }

}
