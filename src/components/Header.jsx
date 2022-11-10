import React from 'react';


export default function Header() {
  return (
    <div className='header flex'>
      <div className='flex'>
        <img src="./img/troll-face.png" alt="troll-face-logo" className='logo-img' />
        <h1>_MEME Generator</h1>
      </div>
      <p>using Reactjs</p>
    </div>
  )
}
