import React from 'react'
import './ProgressBar.css'

export default function ProgressBar (percent) {
  if (percent > 100) {
    percent = 100;
  } 

  return (
    <div>
      <div className="myProgress">
        <div className="myBar" style={{ width: `${percent}%`}}></div>
      </div>
    </div>
  )
}
