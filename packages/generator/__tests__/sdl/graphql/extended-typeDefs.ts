import gql from 'graphql-tag';

export default gql`
  type Mutation {
    Users_transactionalBatchMutation(
      mutations: [Users_transactionalMutationInput]
    ): Boolean!
  }
`;
