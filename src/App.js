import React, { Component } from 'react';
import CardList from './components/card-list/card-list';

import './App.css'
import InputSearch from './components/input-search/input-search';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      text:'',
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  inputHandler = e =>{
    this.setState({text:e.target.value})
  }

  render() {
    const {text, monsters} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(text.toLocaleLowerCase()))
    return (
      <div className='App'>
        <InputSearch inputHandler={this.inputHandler} placeholder='search name'/>
        <CardList  monsters={filteredMonsters}/>
      </div>
    )
  }
}

