import React, {Component} from 'react';
import styled from 'styled-components';
//import classNames from 'classnames';

const NavBarStyled = styled.nav``;

export default class NavBar extends Component{
     render(){
        return (
            <nav className="navbar navbar-expand-mg navbar-light bg-light fixed-top">
            <a  
                href=""
                classeName="navbar-brand col-sm col-md-2 mr-0 align-items-center">Pokedex
            </a>
            </nav>
          );
     }
}