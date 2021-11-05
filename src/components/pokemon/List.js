import React, {Component} from 'react';
import axios from 'axios';


import Card from './Card';

export default class List extends Component{

    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon: null,
    };

    componentDidMount(){

    };

    render(){
        return(
            <div className="row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>  
        )
    }
}