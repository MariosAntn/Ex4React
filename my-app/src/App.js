import React, { Component } from 'react';
import './App.css';
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import {robots} from "./users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchResult: ""
    };
  }

  onSearchChange = (event) => {
    this.setState({ SearchResult: event.target.value })
  }

  componentDidMount() {
    fetch("users.json")
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) })
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.username.toLowerCase().includes(this.state.SearchResult.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className="tc">
        <h1>SearchBox</h1>
        <SearchBox searchchange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;