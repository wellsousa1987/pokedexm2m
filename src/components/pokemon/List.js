import React, {Component} from 'react';
import axios from 'axios';


import Card from './Card';

export default class List extends Component{

    state = {
        //url: "https://pokeapi.co/api/v2/pokemon/",
        //url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118",
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
        pokemon: null,
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    };

    render(){
        
        if(this.state.pokemon){
            
            return(
                    
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            <Card
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </div>
            )
        }
        

        return(
            <h1>Carregando lista de pokemons...</h1>
        )
    }
}