import './App.css';
import firebase from 'firebase/app';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState, useEffect } from 'react'

function App() {

  const [selectedItems, setSelectedItems] = useState([])
  const menuitems = ['Garlic', 'Eggs', "Duck", 'Chicken', 'Pizza', 'Meatloaf', 'Meatballs', 'Turkey']
  const [alertMessage, setAlertMessage] = useState("")

  let MenuItemsRendered = menuitems.map((item, index) => (
    <div key={index} className='menuitem' onClick = {() => {
       if (selectedItems.includes(item)) {
         const index = selectedItems.indexOf(item)
         const duplicateSelectedItems = [...selectedItems];
         duplicateSelectedItems.splice(index, 1)
         setSelectedItems(duplicateSelectedItems)
       } else {
         setSelectedItems([...selectedItems, item])
       }
    }} >
        <h4>{item}</h4>
    </div>
  ))
  const selectedItemsRendered = selectedItems.map((item, index) => {
      if (selectedItems.includes("Garlic") &&
      selectedItems.includes("Duck") &&
      selectedItems.includes("Eggs") &&
      selectedItems.includes("Chicken") &&
      selectedItems.includes("Pizza")
      ) {
        if (index === 0) {
          return (
            <div key={index} className='selectedItems'>
              <h4>Garegguckenizza</h4>
            </div>
          )
        } else if (item !== "Garlic" 
        && item !== "Duck"
        && item !== "Eggs"
        && item !== "Chicken" 
        && item !== "Pizza"
        ) {
          return (
            <div key={index} className='selectedItems'>
              <h4>{item}</h4>
            </div>
          )
        } else {
          return
        }
      }

      if (selectedItems.includes("Meatloaf") &&
      selectedItems.includes("Turkey") &&
      selectedItems.includes("Duck") &&
      selectedItems.includes("Meatballs") &&
      selectedItems.includes("Pizza")
      ) {
        if (index === 0) {
          return (
            <div key={index} className='selectedItems'>
                <h4> <a href="https://www.youtube.com/watch?v=GY9MrenABvQ" target='_blank' rel='noopener noreferrer' style={{'color':'black'}}> Meaturduckbalizza</a></h4>
            </div>
          )
        } else if (item !== "Meatloaf" 
        && item !== "Turkey"
        && item !== "Duck"
        && item !== "Meatballs" 
        && item !== "Pizza"
        ) {
          return (
            <div key={index} className='selectedItems'>
              <h4>{item}</h4>
            </div>
          )
        } else {
          return
        }
      }


      return (
        <div key={index} className='selectedItems' >
        <h4>{item}</h4>
      </div>
      )
      
  })

  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  
  return (
    
    <div>
      <NavigationBar
            loggedIn = {loggedIn}
            setLoggedIn = {(input) => setLoggedIn(input)}
            name = {name}
            setName = {(input) => setName(input)}
       />
       {alertMessage === '' ? <div></div> : <div className="alert card" onClick={() => {
            setAlertMessage("")
          }}> <CloseIcon 
          style={{
            position: "absolute", 
            top: "1px", 
            right: "3px", 
            fontSize: "15px"
          }} 
        />
         {alertMessage}
      </div>
}
         
      <div className="center">
        <div id='restaurantsection'>
          <div className="card">
            <h3>Our Menu</h3>
            <div id="menulist">
              {MenuItemsRendered}
            </div>
          </div>
          <div className="card">
              <h3>Your Order</h3>
              {selectedItemsRendered}
          </div>
          <div className="submit">
              <SubmitButton
                  loggedIn = {loggedIn}
                  name = {name}
                  setAlertMessage = {setAlertMessage} 
               />
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;


const SubmitButton = (props) => {
  return (
    <button onClick={() => handleButtonSubmit(props.name, props.loggedIn, props.setAlertMessage)}
      className="button" >
        Make your order!
    </button>
  )
}

const handleButtonSubmit = (name, loggedIn, settingAlertMessage) => {
  if(loggedIn)
  {
    settingAlertMessage("Your order has been processed!")
  }
  else{
    console.log("running")
    settingAlertMessage("Please log in to order stuff")
  }

}

const NavigationBar = (props) => {
  
  return (
  <div className="navigationBar">
          <div>
          <a href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener noreferrer'>  
              You're at GAREGGUCKENIZZA!
          </a>
          </div> 
    <div className="navBarSpace"></div>
    
    <SignIn 
      loggedIn = {props.loggedIn}
      setLoggedIn = {(input) => props.setLoggedIn(input)}
      name = {props.name}
      setName = {(input) => props.setName(input)}
        />
  </div>
  )
  
}

const SignIn = (props) => {
  if(!props.loggedIn){
  return (
    <div onClick = {() => {
      firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(userCredential=>{
          // Add code that handles login ig
        //this.loginSuccess(userCredential);
        props.setLoggedIn(true);
        console.log(userCredential.user.email)
        props.setName(userCredential.user.displayName)
      }).catch(error=>{
        console.log("Error:", error);
      });
    }}>
      Login with google 	&nbsp;
      <VpnKeyIcon />
    </div>
  )
  }
  else{
    return(
      <div>
        Welcome, {props.name}!
      </div>
    )
  }
}
