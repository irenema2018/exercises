import React from 'react';
// import './Square.css'
// import Square from './Square'
import './App.css'

class App extends React.Component {

  state = {
    languages: []
  }

  // react lifecycle methods
  componentDidMount() {
    console.log("here we are")
    const url = 'http://localhost:8888/api/languages'
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          languages: res
        })
      })
  }


  selectItem = (name) => {
    this.setState({
      languages: this.state.languages.map(lang => {
        if (lang.name === name) {
          // return { ...lang, selected: true }
          return { ...lang, selected: !lang.selected }//negation
        } else {
          return { ...lang }
        }
      })
    })
  }

  render() {
    const {languages} = this.state
    
    return (
      <div className="App">
        <ul>
          {languages.map(lang => 
            <Box key={lang.name} lang={lang} onSelect={this.selectItem}
            />
            // <li 
            // style={{backgroundColor: lang.selected ? 'red' : ''}}
            // onClick={() => this.selectItem(lang.name)}>
            // {lang.name}{lang.selected ? 'yes' : 'no'}
            // </li>
            )}
        </ul>
       </div>
    )
  }
}


  function Box(props) {
    const style= { backgroundColor: props.lang.selected ? 'red' : ''}
    const liClass = props.lang.selected ? 'selected' : ''
    return (
      <li 
      style={style}
      onClick= {() => props.onSelect(props.lang.name)}>
      {props.lang.name}
      </li>
    )
  }

export default App;

// export default class App extends React.Component {
//   state = {
//     squares: [
//       { name: 'ruby',    selected: 0 },
//       { name: 'js',      selected: 0 },
//       { name: 'php',     selected: 0 },      
//       { name: 'java',    selected: 0 },
//       { name: 'scala',   selected: 0 },
//       { name: 'elixir',  selected: 0 },
//       { name: 'crystal', selected: 0 },
//       { name: 'haskell', selected: 0 },      
//       { name: 'csharp',  selected: 0 }
//     ]
//   }

//   // Why no const?
//   click = (index) => {
//     // Make a copy of the old array 
//     let new_square = this.state.squares.slice();

//     new_square[index].selected = new_square[index].selected? 0:1

//     this.setState({ squares: new_square })
//   }
  
//   render () {
//     const { squares } = this.state

//     return (
//       <div className="container">
//         {/* Loop through 9 squares */}
//         {squares.map((square, index) => 
//           <Square 
//             square={square}
//             index={index}
//             irene={this.click}
//           />)}
//       </div>
//     )
//   }
// }

// ____________________________________________________________

// var languages = [
//   { name: 'ruby'},
//   { name: 'js'},
//   { name: 'css'}
// ]


// //makes a copy of the array
// languages.map (lang => {
//   if(lang.name === 'js') {
//     return { ...lang, selected: true}
//   } else {
//     return {...lang}
//   }
// })

