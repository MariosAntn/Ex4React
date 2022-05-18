import React, { Component } from 'react';
import './App.css';
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      SearchUser: ""
    };
  }

  onSearchChange = (event) => {
    this.setState({ SearchUser: event.target.value })
  }

  componentDidMount() {
    fetch('../php/RetrieveUsers.php')
      .then(response => response.json())
      .then(data => { this.setState({ users: data }) })
  }

  render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.username.toLowerCase().includes(this.state.SearchUser.toLowerCase())
    });
    return (
      <div className="tc">
        <h1>IronGym Users SearchBox</h1>
        <SearchBox searchchange={this.onSearchChange} />
        <CardList users={filteredUsers} />
      </div>
    )
  }
}

export default App;