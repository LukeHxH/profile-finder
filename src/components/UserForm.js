import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  bindUser = event => {
    this.setState({ user: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();

    this.props.update(this.state);
  };

  render() {
    const { user } = this.state;

    return(
      <form onSubmit={ this.submitForm }>
        <label htmlFor="url"> <strong>Show user info for </strong></label>
        <input
          id="url"
          type="text"
          value={ user }
          onChange={ this.bindUser } />
        
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default UserForm;