import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';




class App extends Component  {
  state = {
    users: [
      {
        id: "1",
        image: "1.png",
        name: "John Smith",
        phone: "555123456",
        email: "john.smith@bcs.com",
        dob: "02-03-1983"
      },
      {
        id: 2,
        image: "2.png",
        name: "Mark Jones",
        phone: "55511223344",
        email: "mark.jones@bcs.com",
        dob: "02-11-1988"
      },
      {
        id: 3,
        image: "3.png",
        name: "Lidia Brown",
        phone: "5554442562",
        email: "lidia.brown@bcs.com",
        dob: "04-11-1986"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">Click on carrots to filter by heading, or use the search box to narrow your results.</p>
        </nav>

        <input className="search"
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
