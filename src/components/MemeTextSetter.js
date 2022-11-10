import React from 'react'

export default function MemeTextSetter(props) {
  return (
    <div>
      <p className='toptext'>{props.toptext}</p>
       <img src={props.memeImage} alt={props.alt}
        className='memeImg'></img>
      <p className='bottomtext'>{props.bottomtext}</p>
    </div>
  )
}