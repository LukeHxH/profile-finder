import React, { Component } from 'react';
import axios from 'axios';
import { GET_ORGANIZATION } from './queries/queries';
import { REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN } from './config';

const axiosGithubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${
      REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

const TITLE = 'Profile finder Application';

class App extends Component {
  state = {
    path: 'https://github.com/OpenDevUFCG/OpenDevUFCG',
    organization: null,
    errors: null
  }

  onFetchFromGithub = () => {
    axiosGithubGraphQL
      .post('', { query: GET_ORGANIZATION })
      .then( result => 
        this.setState(() => ({
          organization: result.data.data.organization,
          errors: result.data.errors
        }))
      );
  }

  componentDidMount() {
    this.onFetchFromGithub();
  };

  bindPath = event => {
    this.setState({ path: event.target.value });
  };

  submitForm = event => {
    // fetch Data

    event.preventDefault();
    console.log(this.state.path);
  }

  render() {
    const { path } = this.state;

    return (
      <div>
        <header>
          <p> {TITLE} </p>
        </header>

        <form onSubmit={ this.submitForm }>
          <label htmlFor="url"> Show open issues for </label>
          <input 
            id="url"
            type="text"
            value={ path }
            onChange={ this.bindPath }
            style={ {width: '300px'} } />
          
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
