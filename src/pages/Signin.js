import React, { Component } from 'react'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'

export default class Signin extends Component {
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
                    <input className="input" placeholder="Pineapple ID" onChange={(e) => this.setState({ username: e.target.value })}></input>
                    <input className="input" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })}></input>
                    <button className="button" onClick={()=>this.login()}>Sign In</button>
                    <Link to="/register">
                    <p>Don't have an account? Create one now</p>
                    </Link>
                </div>
            </HashRouter>
        )
    }
}