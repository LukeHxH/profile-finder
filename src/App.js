import React, { Component } from 'react';
import { REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN } from './config';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import UserForm from './components/UserForm';
import User from './components/User';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    });
  }
});

const TITLE = 'Profile finder Application';

class App extends Component {
  state = {
    user: "LukeHxH"
  }

  componentDidMount() {
    // fetchDataFromGithub
  };

  submitForm = (state) => {
    // fetch Data

    this.setState(state);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <header>
            <h1> {TITLE} </h1>
          </header>

          <UserForm user={this.state.user} update={ this.submitForm } />
          <hr />
          <User user={this.state.user} />
        </div>
      </ApolloProvider >
    );
  }
}

export default App;
