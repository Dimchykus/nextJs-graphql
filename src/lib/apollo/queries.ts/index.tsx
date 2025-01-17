import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getAllUsers($name: String) {
    getAllUsers(name: $name) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
