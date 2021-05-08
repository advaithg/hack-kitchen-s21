import './App.css';
import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";

function App() {
  const [imgUrl, setImgUrl] = ""
  const [imgName, setImgName] = ""
  const [numOfAPICalls, incNumOfAPICalls] = useState(0)
  useEffect(() => {
    let requestId = '/call' + numOfAPICalls
    fetch(requestId)
    .then(res => {
        const {status} = res 
        return res.json()
     }).then(data => {
        setImgUrl(data.imgUrl)
        setImgName(data.imgName)
     })
     .catch(err => {
       console.log(err)
     })
  }, [numOfAPICalls])
  useEffect(() => {
    fetch('/call1')
  }, [])
  
  return (
    <div id = 'bg'  onClick = {() => {
      incNumOfAPICalls(numOfAPICalls + 1)
    }}>
      <img className='backgroundimg' src={imgUrl}/>
      <h3 className='imglabel'>
        {imgName} 
      </h3>
      {/* <a href='https://www.youtube.com/watch?v=GY9MrenABvQ'> MEATURDUCKBALIZZA </a> */}
    </div>
  )
}

const EasterEgg = () => {
  return (
    <div id="pogEugene">
      <h3>What could be a better easter egg than watching :pogEugene: sing?</h3>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=fhYw-UUpANM"
      /> 
    </div>
  )
}

export default App;
