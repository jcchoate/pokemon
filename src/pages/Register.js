import React, { Component } from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'

export default class Register extends Component {
    constructor() {
        super()
    
        this.state = {
          username: '',
          password: '',
          loggedInUser: {}
        }
      }
      async login(){
        let {username,password}= this.state 
        let res = await axios.post('/auth/login', {username,password})
        this.setState({loggedInUser: res.data})
      }
      async signup(){
        let {username, password} = this.state
        let res = await axios.post('/auth/signup', {username, password})
        this.setState({loggedInUser: res.data})
      }
      async logout(){
        await axios.get('/auth/logout')
        this.setState({loggedInUser: {}})
      }
    render() {
        return (
            <HashRouter>
                <div>
                    <Link to='/sign-in'>
                        <p>Sign in here</p>
                    </Link>
                    <input placeholder="name@example.com" onChange={(e) => this.setState({ username: e.target.value })}></input>
                    <input placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                    <button onClick={()=> this.signup()}>Continue</button>
                </div>
            </HashRouter>
        )
    }
}