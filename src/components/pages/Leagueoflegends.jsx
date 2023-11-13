import React from 'react'
import "./Leagueoflegends.css"

export const Leagueoflegends = () => {
  return (
    <div className='body-container'>
      <div className='game-title'>
        <h1>League of Legends</h1>
      </div>
      <div className='search-container'>
        <input placeholder="Search..."/>
      </div>
    </div>
  )
}
