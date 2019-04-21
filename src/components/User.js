import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_USER } from '../queries/queries';

class User extends Component {
  render() {
    const user = this.props.user;

    return(
      <section>
        <Query query={GET_USER} variables={{login: user}}>
          {({loading, error, data}) => {
            if (loading) return `Loading...`;
            if (error) return `ERROR: ${error}`;
            return(
            <div>
              <p>
                <img
                  src={data.user.avatarUrl}
                  alt="Unavailable"
                  style={{width: '150px'}} />
              </p>

              <p>
                <strong>Name: </strong>{data.user.name}
              </p>

              <p>
                <strong>Username: </strong>{data.user.login}
              </p>

              <p>
                <strong>URL: </strong>
                <a href={data.user.url}
                  target="_blank"
                  rel="noopener noreferrer" >
                  {data.user.url}
                </a>
              </p>

              <p>
                <strong>Bio: </strong>{data.user.bio}
              </p>

              <p>
                <strong>Total repos: </strong>{data.user.repositories.totalCount}
              </p>
            </div>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default User;