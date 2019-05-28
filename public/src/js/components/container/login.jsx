import React, {Component} from 'react';
import DisplayLogin from '../presentational/DisplayLogin.jsx';
import axios from 'axios';

export default class Login extends Component{

    constructor(){
        super();
        this.state = {
            text: '',
            disabled: false
        };
    }
    
    handleLogin = event =>{
        this.setState({text:'taking you to Spotify', disabled:true});
        // axios({url:"http://localhost:3000/api/getAuth"}).then((data)=>{
        //     console.log("DATA",data)
        // })
    }

    render(){
        return(
            <DisplayLogin 
                text={this.state.text}
                handleLogin = {this.handleLogin.bind(this)}
            />
        );
    }
}