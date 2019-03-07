import React, { Component } from 'react'
import axios from 'axios'

export default class NewPokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemon: '',
            img: ''
        }
    }
    addItemFn() {
        let {id, level, img} = this.props
        axios
            .post('/pokemon',
                {
                    name: 'PacBook Pro',
                    price: '7548.98',
                    imageAddress: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/BP/MBP15G/201807/MBP15G-201807?wid=800&hei=800&fmt=jpeg&qlt=80&op_usm=0.5,1.5&fit=constrain&.v=1531249595742',
                    id: 1
                })
            .then((res) => {
                this.setState({ items: res.data })
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
                    </div>
                    : <p>There's no pokemon now</p>
                }
            </div>
        )
    }
}
