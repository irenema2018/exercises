import React from 'react';

export default function Cube (params) {

  const changeColor= () => params.irene(params.index)

  return (
    <div
      className={params.square.selected? 'square selected' : 'square'}
       
      onClick={changeColor}

      key={params.square.name}
        
    >
      {params.square.name}


    </div>
  )


}


  