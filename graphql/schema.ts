export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser: User;
  getUserById: User;
  getOnline: Array<User>;
  getMessages: Array<Message>;
  getGrants: Scalars['String'];
  getHello: Scalars['String'];
  getPictureById: Picture;
};

export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetMessagesArgs = {
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type QueryGetPictureByIdArgs = {
  pictureId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Scalars['String']>;
  wasOnlineAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  roles: Array<Role>;
  avatar?: Maybe<Picture>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  muted?: Maybe<Scalars['Boolean']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Picture = {
  __typename?: 'Picture';
  id: Scalars['Int'];
  ownerId?: Maybe<Scalars['Int']>;
  sId: Scalars['Int'];
  mId: Scalars['Int'];
  oId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  owner: User;
  s: PictureRepresentation;
  m: PictureRepresentation;
  o: PictureRepresentation;
};

export type PictureRepresentation = {
  __typename?: 'PictureRepresentation';
  id: Scalars['Int'];
  height: Scalars['Float'];
  width: Scalars['Float'];
  size: Scalars['Float'];
  path: Scalars['String'];
  link: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['Int'];
  ownerId?: Maybe<Scalars['Float']>;
  randomId?: Maybe<Scalars['String']>;
  system: Scalars['Boolean'];
  content: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  deletedById?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  owner?: Maybe<User>;
  pictures: Array<Picture>;
  deletedBy?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateOnlineStatus: Scalars['Boolean'];
  updateAvatar: User;
  punish: User;
  unpunish: User;
  createMessage: Message;
  deleteMessage: Message;
  signIn: Token;
  signUp: User;
  confirmEmail: Token;
  requestEmailConfirmation: User;
  requestPasswordReset: Scalars['Boolean'];
  resetPassword: Token;
};

export type MutationUpdateAvatarArgs = {
  pictureId: Scalars['Int'];
};

export type MutationPunishArgs = {
  userId: Scalars['Int'];
  type: PunishmentTypes;
  reason: Scalars['String'];
  duration?: Maybe<Scalars['Int']>;
};

export type MutationUnpunishArgs = {
  userId: Scalars['Int'];
};

export type MutationCreateMessageArgs = {
  content?: Maybe<Scalars['String']>;
  randomId?: Maybe<Scalars['String']>;
  pictures?: Maybe<Array<Scalars['Int']>>;
};

export type MutationDeleteMessageArgs = {
  messageId: Scalars['Int'];
};

export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};

export type MutationRequestPasswordResetArgs = {
  email: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export enum PunishmentTypes {
  Ban = 'ban',
  Mute = 'mute',
}

export type Token = {
  __typename?: 'Token';
  id: Scalars['Int'];
  value: Scalars['String'];
  ownerId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  usedAt?: Maybe<Scalars['DateTime']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onlineUpdated: Array<User>;
  userUpdated: User;
  messageCreated: Message;
  messageDeleted: Message;
};

export type ConfirmEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type ConfirmEmailMutation = { __typename?: 'Mutation' } & {
  confirmEmail: { __typename?: 'Token' } & Pick<Token, 'id'>;
};

export type CreateMessageMutationVariables = Exact<{
  content?: Maybe<Scalars['String']>;
  randomId?: Maybe<Scalars['String']>;
  pictures?: Maybe<Array<Scalars['Int']>>;
}>;

export type CreateMessageMutation = { __typename?: 'Mutation' } & {
  createMessage: { __typename?: 'Message' } & Pick<Message, 'id'>;
};

export type DeleteMessageMutationVariables = Exact<{
  messageId: Scalars['Int'];
}>;

export type DeleteMessageMutation = { __typename?: 'Mutation' } & {
  deleteMessage: { __typename?: 'Message' } & Pick<
    Message,
    'id' | 'randomId' | 'content' | 'username' | 'system' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > & {
      owner?: Maybe<
        { __typename?: 'User' } & Pick<User, 'id' | 'username'> & {
            avatar?: Maybe<
              { __typename?: 'Picture' } & {
                s: { __typename?: 'PictureRepresentation' } & Pick<PictureRepresentation, 'link'>;
              }
            >;
          }
      >;
      pictures: Array<
        { __typename?: 'Picture' } & {
          m: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'link' | 'width' | 'height'
          >;
          o: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'link' | 'width' | 'height'
          >;
        }
      >;
      deletedBy?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'username'>>;
    };
};

export type PunishMutationVariables = Exact<{
  userId: Scalars['Int'];
  reason: Scalars['String'];
  duration?: Maybe<Scalars['Int']>;
  type: PunishmentTypes;
}>;

export type PunishMutation = { __typename?: 'Mutation' } & {
  punish: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type RequestEmailConfirmationMutationVariables = Exact<{ [key: string]: never }>;

export type RequestEmailConfirmationMutation = { __typename?: 'Mutation' } & {
  requestEmailConfirmation: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type RequestPasswordResetMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'requestPasswordReset'
>;

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword: { __typename?: 'Token' } & Pick<Token, 'ownerId' | 'value'>;
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'Token' } & Pick<Token, 'ownerId' | 'value'>;
};

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignUpMutation = { __typename?: 'Mutation' } & {
  signUp: { __typename?: 'User' } & Pick<User, 'id' | 'email'>;
};

export type UpdateAvatarMutationVariables = Exact<{
  pictureId: Scalars['Int'];
}>;

export type UpdateAvatarMutation = { __typename?: 'Mutation' } & {
  updateAvatar: { __typename?: 'User' } & {
    avatar?: Maybe<
      { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
          s: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'height' | 'width' | 'link' | 'size'
          >;
          m: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'height' | 'width' | 'link' | 'size'
          >;
          o: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'height' | 'width' | 'link' | 'size'
          >;
        }
    >;
  };
};

export type UpdateOnlineStatusMutationVariables = Exact<{ [key: string]: never }>;

export type UpdateOnlineStatusMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'updateOnlineStatus'>;

export type GetChatDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetChatDataQuery = { __typename?: 'Query' } & {
  getMessages: Array<
    { __typename?: 'Message' } & Pick<
      Message,
      'id' | 'randomId' | 'content' | 'username' | 'system' | 'createdAt' | 'updatedAt' | 'deletedAt'
    > & {
        owner?: Maybe<
          { __typename?: 'User' } & Pick<User, 'id' | 'username'> & {
              avatar?: Maybe<
                { __typename?: 'Picture' } & {
                  s: { __typename?: 'PictureRepresentation' } & Pick<PictureRepresentation, 'link'>;
                }
              >;
            }
        >;
        pictures: Array<
          { __typename?: 'Picture' } & {
            m: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'link' | 'width' | 'height'
            >;
            o: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'link' | 'width' | 'height'
            >;
          }
        >;
        deletedBy?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'username'>>;
      }
  >;
  getOnline: Array<
    { __typename?: 'User' } & Pick<User, 'id' | 'username'> & {
        avatar?: Maybe<
          { __typename?: 'Picture' } & {
            s: { __typename?: 'PictureRepresentation' } & Pick<PictureRepresentation, 'link'>;
          }
        >;
      }
  >;
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = { __typename?: 'Query' } & Pick<Query, 'getGrants'> & {
    getCurrentUser: { __typename?: 'User' } & Pick<
      User,
      'id' | 'username' | 'email' | 'emailConfirmed' | 'createdAt' | 'wasOnlineAt'
    > & {
        avatar?: Maybe<
          { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
              s: { __typename?: 'PictureRepresentation' } & Pick<
                PictureRepresentation,
                'height' | 'width' | 'link' | 'size'
              >;
              m: { __typename?: 'PictureRepresentation' } & Pick<
                PictureRepresentation,
                'height' | 'width' | 'link' | 'size'
              >;
              o: { __typename?: 'PictureRepresentation' } & Pick<
                PictureRepresentation,
                'height' | 'width' | 'link' | 'size'
              >;
            }
        >;
        roles: Array<{ __typename?: 'Role' } & Pick<Role, 'name'>>;
      };
  };

export type GetGrantsQueryVariables = Exact<{ [key: string]: never }>;

export type GetGrantsQuery = { __typename?: 'Query' } & Pick<Query, 'getGrants'>;

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetUserByIdQuery = { __typename?: 'Query' } & {
  getUserById: { __typename?: 'User' } & Pick<
    User,
    'id' | 'username' | 'email' | 'createdAt' | 'wasOnlineAt'
  > & {
      avatar?: Maybe<
        { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
            s: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'height' | 'width' | 'link' | 'size'
            >;
            m: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'height' | 'width' | 'link' | 'size'
            >;
            o: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'height' | 'width' | 'link' | 'size'
            >;
          }
      >;
    };
};

export type MessageCreatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MessageCreatedSubscription = { __typename?: 'Subscription' } & {
  messageCreated: { __typename?: 'Message' } & Pick<
    Message,
    'id' | 'randomId' | 'content' | 'username' | 'system' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > & {
      owner?: Maybe<
        { __typename?: 'User' } & Pick<User, 'id' | 'username'> & {
            avatar?: Maybe<
              { __typename?: 'Picture' } & {
                s: { __typename?: 'PictureRepresentation' } & Pick<PictureRepresentation, 'link'>;
              }
            >;
          }
      >;
      pictures: Array<
        { __typename?: 'Picture' } & {
          m: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'link' | 'width' | 'height'
          >;
          o: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'link' | 'width' | 'height'
          >;
        }
      >;
      deletedBy?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'username'>>;
    };
};

export type MessageDeletedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MessageDeletedSubscription = { __typename?: 'Subscription' } & {
  messageDeleted: { __typename?: 'Message' } & Pick<
    Message,
    'id' | 'randomId' | 'content' | 'username' | 'system' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > & {
      owner?: Maybe<
        { __typename?: 'User' } & Pick<User, 'id' | 'username'> & {
            avatar?: Maybe<
              { __typename?: 'Picture' } & {
                s: { __typename?: 'PictureRepresentation' } & Pick<PictureRepresentation, 'link'>;
              }
            >;
          }
      >;
      pictures: Array<
        { __typename?: 'Picture' } & {
          m: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'link' | 'width' | 'height'
          >;
          o: { __typename?: 'PictureRepresentation' } & Pick<
            PictureRepresentation,
            'link' | 'width' | 'height'
          >;
        }
      >;
      deletedBy?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'username'>>;
    };
};

export type OnlineUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type OnlineUpdatedSubscription = { __typename?: 'Subscription' } & {
  onlineUpdated: Array<
    { __typename?: 'User' } & Pick<User, 'id' | 'username'> & {
        avatar?: Maybe<
          { __typename?: 'Picture' } & {
            s: { __typename?: 'PictureRepresentation' } & Pick<PictureRepresentation, 'link'>;
          }
        >;
      }
  >;
};

export type UserUpdatedSubscriptionVariables = Exact<{ [key: string]: never }>;

export type UserUpdatedSubscription = { __typename?: 'Subscription' } & {
  userUpdated: { __typename?: 'User' } & Pick<
    User,
    'id' | 'username' | 'email' | 'emailConfirmed' | 'createdAt' | 'wasOnlineAt'
  > & {
      avatar?: Maybe<
        { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
            s: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'height' | 'width' | 'link' | 'size'
            >;
            m: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'height' | 'width' | 'link' | 'size'
            >;
            o: { __typename?: 'PictureRepresentation' } & Pick<
              PictureRepresentation,
              'height' | 'width' | 'link' | 'size'
            >;
          }
      >;
      roles: Array<{ __typename?: 'Role' } & Pick<Role, 'name'>>;
    };
};
