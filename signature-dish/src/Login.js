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

        fetch("/validate", {
            body: JSON.stringify({username: this.state.username, password: this.state.password}),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => {
            return res.json();
        }).then(data => {
            this.validate(data.msg);
        })
        .catch(err => {
           console.log(err);
        })

        event.preventDefault();
    }

    validate = msg => {
        if(msg === "New"){
            // New user
        }
        else{
            // Existing user
        }
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
                <form onSubmit={this.handleSubmit}>
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
                    {this.state.errormsg}
                </p>                
            </div>
        )
    }
}