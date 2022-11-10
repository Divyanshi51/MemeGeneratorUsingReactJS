import React, { useState } from 'react'
import MemeData from '../MemeData';
import MemeTextSetter from './MemeTextSetter';

export default function MEME() {

  const [memeImage, setMemeImage] = useState("https://th.bing.com/th/id/OIP.POSZwX-BFy-SRKhIoP2pBAHaEK?w=324&h=181&c=7&r=0&o=5&dpr=1.6&pid=1.7");

  function getMemeRandomImg() {
    let memeArray = MemeData.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);
    setMemeImage(memeArray[randomNum].url);
  }

  const [Topinput, setTopInput] = useState("")
  const [Bottominput, setBottomInput] = useState("")
  const handleChangeTopinput = (event) => {
    setTopInput(event.target.value)
    console.log(event.target.value)
  }
  const handleChangeBottominput = (event) => {
    setBottomInput(event.target.value)
    console.log(event.target.value)
  }
  return (
    <>
        <div className='marginAuto'>
        <input
          type="text"
          placeholder="Add Top Text..."
          value={Topinput}
          onChange={handleChangeTopinput}
        />
        <input
          type="text"
          placeholder="Add Bottom Text ..."
          value={Bottominput}
          onChange={handleChangeBottominput}
        />
      <input
        type="button"
        className='btn'
        value="Change MEME image..."
        onClick={getMemeRandomImg} />
        </div>
      <div className='meme'>
        <MemeTextSetter
          toptext={(Topinput) ? Topinput : "Dekh Raha Hai Binod"}
          memeImage={memeImage}
          alt={MemeData.data.memes.name}
          bottomtext={(Bottominput) ? Bottominput : "Kitna Mast MEME Generator Hai"} />
      </div>
    </>
  )
}
