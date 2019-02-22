import React, { Component } from 'react'
import './map1.css'
import Trainer from '../trainers/Testtrainer'
import sprite from './../myCharacterSprite.png'
import axios from 'axios'
import NewPokemon from './NewPokemon';

export default class map1 extends Component {
    constructor() {
        super()


        this.state = {
            right: 1,
            top: 1,
            pokemon: [],
        }
    }
    keypress = (e) => {
        if (e.key === 125) {
            return this.setState({
                top: this.state.top + 1
            })
        } else if (e.key === 126) {
            return this.setState({
                top: this.state.top - 1
            })
        } else if (e.key === 123) {
            return this.setState({
                right: this.state.right - 1
            })
        } else if (e.key === 124) {
            return this.setState({
                right: this.state.right + 1
            })
        }
    }

    componentDidMount = async () => {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/?offset=10&limit=802')
            .then(res => {
                console.log(res.data.results)
                this.setState({
                    pokemon: res.data.results
                })
            })
    }
    moveDown = (e) => {
        this.setState({
            top: this.state.top + 1
        })
    }
    moveUp = () => {
        this.setState({
            top: this.state.top - 1
        })
    }
    moveLeft = () => {
        this.setState({
            right: this.state.right - 1
        })
    }
    moveRight = () => {
        this.setState({
            right: this.state.right + 1
        })
    }


    render() {

        let map1 = "https://wiki.pokemon-vortex.com/images/0/08/Map1.png"
        // let map2 = "https://wiki.pokemon-vortex.com/images/e/ea/Map2.png"
        // let map3 = "https://wiki.pokemon-vortex.com/images/4/4f/Map3.png"
        // let map4 = "https://wiki.pokemon-vortex.com/images/4/4f/Map4.png"
        // let map5 = "https://wiki.pokemon-vortex.com/images/4/4b/Map5.png"
        // let map6 = "https://wiki.pokemon-vortex.com/images/4/4d/Map6.png"
        // let map7 = "https://wiki.pokemon-vortex.com/images/e/ec/Map7.png"
        // let map8 = "https://wiki.pokemon-vortex.com/images/8/86/Map8.png"
        // let map9 = "https://wiki.pokemon-vortex.com/images/a/af/Map9.png"
        // let map10 = "https://wiki.pokemon-vortex.com/images/d/d6/Map10.png"
        // let map11 = "https://wiki.pokemon-vortex.com/images/2/22/Map11.png"
        // let map12 = "https://wiki.pokemon-vortex.com/images/9/95/Map12.png"
        // let map13 = "https://wiki.pokemon-vortex.com/images/4/46/Map13.png"
        // let map14 = "https://wiki.pokemon-vortex.com/images/4/44/Map14.png"
        // let map15 = "https://wiki.pokemon-vortex.com/images/0/01/Map15.png"
        // let map16 = "https://wiki.pokemon-vortex.com/images/8/84/Map16.png"
        // let map17 = "https://wiki.pokemon-vortex.com/images/4/4b/Map17.png"
        // let map18 = "https://wiki.pokemon-vortex.com/images/3/37/Map18.png"
        // let map19 = "https://wiki.pokemon-vortex.com/images/5/52/Map19.png"
        // let map20 = "https://wiki.pokemon-vortex.com/images/2/26/Map20.png"
        // let map21 = "https://wiki.pokemon-vortex.com/images/f/fe/Map21.png"
        // let map22 = "https://wiki.pokemon-vortex.com/images/e/e8/Map22.png"
        // let map23 = "https://wiki.pokemon-vortex.com/images/5/5f/Map23.png"
        // let map24 = "https://wiki.pokemon-vortex.com/images/1/1c/Map24.png"
        // let map25 = "https://wiki.pokemon-vortex.com/images/3/3f/Map25.png"
        // let map26 = "https://wiki.pokemon-vortex.com/images/a/a6/Map26.png"

        let tainerstyles = {
            position: "relative",
            gridColumn: `${this.state.right}`,
            gridRow: `${this.state.top}`
        }
        let randomPokemon = this.state.pokemon[Math.floor(Math.random() * this.state.pokemon.length)]


        return (
            <div className="map1">
                <div className="backgroundImage">
                    <div className="trainer" style={tainerstyles}>
                        <img src={sprite} />
                    </div>
                </div>
                <div className="buttons">
                    <img className="arrowUp" src="https://freeiconshop.com/wp-content/uploads/edd/arrow-boxed-outline.png" onClick={this.moveUp} />
                    <img className="arrowDown" src="https://freeiconshop.com/wp-content/uploads/edd/arrow-boxed-outline.png" onClick={this.moveDown} />
                    <img className="arrowLeft" src="https://freeiconshop.com/wp-content/uploads/edd/arrow-boxed-outline.png" onClick={this.moveLeft} />
                    <img className="arrowRight" src="https://freeiconshop.com/wp-content/uploads/edd/arrow-boxed-outline.png" onClick={this.moveRight} />
                </div>

                <NewPokemon
                    name={randomPokemon}
                />
            </div>
        )
    }
}
