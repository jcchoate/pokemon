import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
        Pokemon Masters
        <Link to='/maps'>TO THE MAPS</Link>
      </div>
    )
  }
}
