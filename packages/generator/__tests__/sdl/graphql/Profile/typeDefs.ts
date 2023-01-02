import gql from 'graphql-tag';

export default gql`
  type Profile @key(fields: "userId") @shareable {
    userId: Int!
    user: User!
    location: String
    joiningDate: DateTime
    businessPhone: String
    mobilePhone: String
    kakaoTalkId: String
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type Query {
    Users_findUniqueProfile(where: Users_ProfileWhereUniqueInput!): Profile
    Users_findUniqueProfileOrThrow(
      where: Users_ProfileWhereUniqueInput!
    ): Profile
    Users_findFirstProfile(
      where: Users_ProfileWhereInput
      orderBy: [Users_ProfileOrderByWithRelationInput]
      cursor: Users_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): Profile
    Users_findFirstProfileOrThrow(
      where: Users_ProfileWhereInput
      orderBy: [Users_ProfileOrderByWithRelationInput]
      cursor: Users_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): Profile
    Users_findManyProfile(
      where: Users_ProfileWhereInput
      orderBy: [Users_ProfileOrderByWithRelationInput]
      cursor: Users_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): [Profile!]
    Users_findManyProfileCount(
      where: Users_ProfileWhereInput
      orderBy: [Users_ProfileOrderByWithRelationInput]
      cursor: Users_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): Int!
    Users_aggregateProfile(
      where: Users_ProfileWhereInput
      orderBy: [Users_ProfileOrderByWithRelationInput]
      cursor: Users_ProfileWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateProfile
    Users_groupByProfile(
      where: Users_ProfileWhereInput
      orderBy: [Users_ProfileOrderByWithAggregationInput]
      by: [ProfileScalarFieldEnum!]
      having: Users_ProfileScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [ProfileGroupByOutputType]
  }

  type Mutation {
    Users_createOneProfile(data: Users_ProfileCreateInput!): Profile!
    Users_updateOneProfile(
      data: Users_ProfileUpdateInput!
      where: Users_ProfileWhereUniqueInput!
    ): Profile!
    Users_deleteOneProfile(where: Users_ProfileWhereUniqueInput!): Profile
    Users_upsertOneProfile(
      where: Users_ProfileWhereUniqueInput!
      create: Users_ProfileCreateInput!
      update: Users_ProfileUpdateInput!
    ): Profile
    Users_deleteManyProfile(where: Users_ProfileWhereInput): BatchPayload
    Users_updateManyProfile(
      data: Users_ProfileUpdateManyMutationInput!
      where: Users_ProfileWhereInput
    ): BatchPayload
  }
`;
