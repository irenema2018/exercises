import React from 'react'

export default function Square(params) {

  // Why const?
  // irene comes from outside
  const changeColour = () => params.irene(params.index)

  return (
    <div 

      className={params.square.selected ? "square selected":"square"}
      key={params.square.name} // key is for react. must be unique
      onClick={changeColour} //why cann't call irene here 
      >
      {params.square.name /* textContent */}
    </div>
  )
}