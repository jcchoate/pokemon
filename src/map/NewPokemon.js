import React, { Component } from 'react'
import axios from 'axios'

export default class NewPokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: '',
            img: '',
            lvl: ''
        }
    }
    capturePokemon = ()=>{
        this.setState({pokemon: this.props.id.name, img: this.props.img, lvl: this.props.level })
        axios
            .post('/pokemon',
                {
                    pokemon: this.state.pokemon,
                    img: this.state.img,
                    lvl: this.state.lvl
                })
            .then((res) => {
                this.setState({ pokemon: res.data, img: res.data, lvl: res.data })
                console.log('hit')
            })
    }


    render() {
        console.log(this.props.id)
        return (
            <div>
                {this.props.id ?
                    <div>
                        <div>{this.props.id ? <h1>{this.props.id.name} appeared!</h1> : null}</div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.img}.png`} alt="pokemon sprite" />
                        <p>Level {this.props.level}</p>
                        <button onClick={this.capturePokemon}>Capture</button>
                    </div>
                    : <p>There's no pokemon now</p>
                }
            </div>
        )
    }
}
