import { GetChatDataQuery } from 'graphql/schema';

export enum ChatMessageState {
  sent = 'sent',
  delivered = 'delivered',
}

export type ChatMessage = GetChatDataQuery['getMessages'][0] & {
  state?: ChatMessageState;
  dayFirst?: boolean;
};
