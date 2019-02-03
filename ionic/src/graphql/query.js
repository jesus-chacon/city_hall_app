import gql from 'graphql-tag';

export const Feed = gql `
  query {
    feed {
      id
      title
      description
    }
  }
`;

export default ({
  Feed
});
