import { Message } from 'graphql/schema';

export enum ChatMessageState {
  sent = 'sent',
  delivered = 'delivered',
}

export type ChatMessage = Message & {
  state?: ChatMessageState;
};
