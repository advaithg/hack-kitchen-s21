import './App.css';
import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";

//________________________________________________________________________________________________________________________

function App() {
  const [imgUrl, setImgUrl] = ""
  const [imgName, setImgName] = ""
  const [numOfAPICalls, incNumOfAPICalls] = useState(0)
  useEffect(() => {
    let requestId = '/call' + numOfAPICalls
    console.log("requestId", requestId)
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
    <EasterEgg/>
    // <div id = 'bg'  onClick = {() => {
    //   incNumOfAPICalls(numOfAPICalls + 1)
    // }}>
    //   <img className='backgroundimg' src={imgUrl}/>
    //   <h3 className='imglabel'>
    //     {imgName} 
    //   </h3>
    //   <a href='https://www.youtube.com/watch?v=GY9MrenABvQ'> MEATURDUCKBALIZZA </a>
    // </div>
  )
}

//________________________________________________________________________________________________________________________

class EasterEgg extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {    this.setState({value: event.target.value});  }

  render() {
    const enteredText = this.state.value;
    if(enteredText !== "pogEugene")
    {    
      return (
        <div id = "form">
          <form onChange={this.handleChange}>       
          <label> enter pogEugene for a surprise! <br/>
              <input type="text" value={this.state.value}/>        
          </label>
          </form>
        </div>
      );
    }
    else{
      return <EasterEggSubmit/>
    }
  }  
}

//________________________________________________________________________________________________________________________

const EasterEggSubmit = (props) =>{
  return(
    <div id="pogEugene">
      <h3>What could be a better easter egg than watching the one and only :pogEugene: sing?</h3>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=fhYw-UUpANM"
      /> 
    </div>
  )
} 

//________________________________________________________________________________________________________________________

export default App;
