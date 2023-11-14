import React from 'react'
import { useState } from 'react'
import "./Leagueoflegends.css"

export const Leagueoflegends = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState("Select Region")
  const options = ["EUW", "NA"]

  return (
    <div className='body-container'>
      <div className='game-title'>
        <h1>League of Legends</h1>
      </div>

      <div className='search-container'>
        <input placeholder="Enter username..."/>
        <div className='dropdown'>
          <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
            {selected}
            <span className='dropdown-icon'>&#9660;</span>
          </div>
          {isActive && (
          <div className='dropdown-content'>
            {options.map((option) => (
            <div onClick={() => {setSelected(option); setIsActive(false);}} className='dropdown-item'>
              {option}
            </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
