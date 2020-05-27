import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/ilan274/repos')
      .then(response => response.json())
      .then(users => this.setState({ repositories: users }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { repositories, searchField } = this.state;
    const filteredRepos = repositories.filter(repo =>
      repo.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
      <h1>Repo Selector</h1>
        <SearchBox
          type='search'
          placeholder='Search Repo'
          handleChange={this.handleChange}
        />
        <CardList repositories={filteredRepos} />
      </div>
    );
  }
}

export default App;
