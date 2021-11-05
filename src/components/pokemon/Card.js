import React, {Component} from 'react';

import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em,
    height: 5em,
`

export default class Card extends Component{
    state = {
        id: '',
        name: '',
        url: '',
    }


    componentDidMount(){
        const {name, url} = this.props
        const id = url.split('/')[url.split('/').length - 2]
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;

        this.setState({name, id, imageUrl});
    }

    render(){

        return(
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className='card'>
                    <div className='card-header'>{this.state.id}</div>

                    <Sprite className='card-img-top rounded mx-auto mt-2' src={this.state.imageUrl}></Sprite>

                    <div className='card-body mx-auto'>
                        <h4 className='card-title'>{this.state.name}</h4>
                    </div>
                </div>
            </div>
        )
    }
}