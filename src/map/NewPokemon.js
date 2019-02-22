import React, { Component } from 'react'

export default class NewPokemon extends Component {
    constructor(props){
        super(props)

        this.state={
            pokemon: '',
            img: ''
        }
    }
  render() {
    return (
      <div>
        <h3>{this.props.name ? <h1>{this.props.name.name} appeared!</h1> : null}</h3>
      </div>
    )
  }
}
