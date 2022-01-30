import { gql } from '@apollo/client';

const NEW_NFT = gql`
  mutation newNft($content: String!, $title: String!, $image: String!) {
    newNft(content: $content,title: $title,image: $image) {
      id
      title
      content
      image
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const EDIT_NFT = gql`
  mutation updateNft($content: String!, $title: String!, $image: String!) {
    updateNft(id: $id, content: $content,title: $title,image: $image) {
      id
      title
      content
      image
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        username
        id
      }
    }
  }
`;

const DELETE_NFT = gql`
  mutation deleteNft($id: ID!) {
    deleteNft(id: $id)
  }
`;

const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

const SIGNIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGNUP_USER = gql`
  mutation signUp($email: String!, $username: String!, $password: String!) {
    signUp(email: $email, username: $username, password: $password)
  }
`;

export {
  NEW_NFT,
  EDIT_NFT,
  DELETE_NFT,
  TOGGLE_FAVORITE,
  SIGNIN_USER,
  SIGNUP_USER
};
