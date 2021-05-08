import './App.css';
import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";

function App() {
  const [imgUrl, setImgUrl] = useState("")
  const [imgName, setImgName] = useState("")
  const [numOfAPICalls, incNumOfAPICalls] = useState(0)
  useEffect(() => {
    fetch("/call1")
      .then(res => {
        const {status} = res
        return res.json()
      }).then(data => {
      console.log("data", data)
      setImgUrl(data.imgUrl)
      setImgName(data.imgName)
    })
      .catch(err => {
        console.log(err)
      })
  }, [])

 /* useEffect(() => {
    let requestId = '/call' + numOfAPICalls
    console.log("requestId", requestId)
    fetch(requestId)
    .then(res => {
        const {status} = res
        return res.json()
     }).then(data => {
       console.log("data", data)
        setImgUrl(data.imgUrl)
        setImgName(data.imgName)
     })
     .catch(err => {
       console.log(err)
     })
  }, [numOfAPICalls])*/
  console.log("imgUrl", imgUrl)
  return (
    <div id = 'bg'  onClick = {() => {
      incNumOfAPICalls(numOfAPICalls + 1)
    }}>
      <img className='backgroundimg' src={imgUrl === "" ?
        "https://via.placeholder.com/150" : imgUrl} />
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
