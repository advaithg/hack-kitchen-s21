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
            method: "POST",
            body: JSON.stringify({username: this.state.username, password: this.state.password}),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res => {
            const {status} = res; 
            return res.json();
        }).then(data => {
            this.validate(data.action);
        })
        .catch(err => {
           console.log(err);
        })

        event.preventDefault();
    }

    validate = action => {
        if(action === "alreadyexists"){

        }
        else{
            //go to site?
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