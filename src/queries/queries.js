import { gql } from 'apollo-boost';

const GET_USER = gql`
query($login: String!){
  user(login: $login) {
    name
    avatarUrl
    login
    bio
    url
    repositories {
      totalCount
    }
  }
}
`;

export { GET_USER };