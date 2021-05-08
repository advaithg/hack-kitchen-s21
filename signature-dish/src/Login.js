import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errormsg: "",
            username: "",
            password: "",
        }

        
    }



    handleSubmit = (event) => {
        

        event.preventDefault();
    }

    handleChange = (event, comp) => {
        if(comp === "username")
            this.setState({username: event.target.value})
        else if (comp === "password")
            this.setState({password: event.target.value})
    }

    render(){
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={(event) => this.handleChange(event, "username")} 

                    /><br />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={(event) => this.handleChange(event, "password")}
                    /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p style={{color:"red"}}>
                    {errormsg}
                </p>                
            </div>
        )
    }
}