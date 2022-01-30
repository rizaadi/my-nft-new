import {
  gql
} from '@apollo/client';

const GET_NFTS = gql `
  query nftFeed($cursor: String) {
    nftFeed(cursor: $cursor) {
      cursor
      hasNextPage
      nfts {
        id
        createdAt
        title
        content
        image
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_NFT = gql `
  query nft($id: ID!) {
    nft(id: $id) {
      id
      createdAt
      title
      content
      image
      favoriteCount
      author {
        username
        id
        avatar
      }
    }
  }
`;

const GET_MY_NFTS = gql `
  query me {
    me {
      id
      username
      nfts {
        id
        createdAt
        title
        content
        image
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_MY_FAVORITES = gql `
  query me {
    me {
      id
      username
      favorites {
        id
        createdAt
        title
        content
        image
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const GET_ME = gql `
  query me {
    me {
      id
      favorites {
        id
      }
    }
  }
`;

const IS_LOGGED_IN = gql `
  {
    isLoggedIn @client
  }
`;

export {
  GET_NFTS,
  GET_NFT,
  GET_MY_NFTS,
  GET_MY_FAVORITES,
  GET_ME,
  IS_LOGGED_IN
};