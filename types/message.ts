import { DateTime } from 'luxon';
import { Maybe, MessagePartsFragment } from '~/graphql/schema';
import { getRandomIntInRange, getRandomString } from '~/tools/util';

export enum MessageState {
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
}

export enum MessageType {
  SYSTEM = 1,
  GENERAL = 2,
  LOGIN = 3,
  LOGOUT = 4,
  DONATION = 5,
}

export interface DonationJson {
  id: number;
  username: string;
  message: string;
  amount: number;
  currency: string;
}

export class Message {
  id: number;
  randomId: Maybe<string>;
  content: string;
  username: Maybe<string>;
  schema: string;
  json: Maybe<DonationJson>;
  type: MessageType;
  createdAt: string;
  createdAtLocalDate: string;
  createdAtMillis: number;
  updatedAt: string;
  updatedAtMillis: number;
  deletedAt: Maybe<string>;
  owner: MessagePartsFragment['owner'];
  pictures: MessagePartsFragment['pictures'];
  deletedBy: MessagePartsFragment['deletedBy'];
  state: MessageState = MessageState.DELIVERED;

  constructor(message: MessagePartsFragment) {
    const createdAtDateTime = DateTime.fromISO(message.createdAt);
    const updatedAtDateTime = DateTime.fromISO(message.updatedAt);

    const createdAtLocalDate = createdAtDateTime.toLocal().toISODate();

    this.id = message.id;
    this.randomId = message.randomId ?? null;
    this.content = message.content;
    this.username = message.username ?? null;
    this.schema = message.schema;
    this.json = message.json ? JSON.parse(message.json) : null;
    this.type = message.type;
    this.createdAt = message.createdAt;
    this.createdAtMillis = createdAtDateTime.toMillis();
    this.createdAtLocalDate = createdAtLocalDate;
    this.updatedAt = message.updatedAt;
    this.updatedAtMillis = updatedAtDateTime.toMillis();
    this.deletedAt = message.deletedAt ?? null;
    this.owner = message.owner ?? null;
    this.pictures = message.pictures ?? [];
    this.deletedBy = message.deletedBy ?? null;
  }

  static create(content: string, owner: MessagePartsFragment['owner']): Message {
    const isoDate = DateTime.local().toISO();

    const message = new Message({
      id: getRandomIntInRange(2e7, 2e8),
      randomId: getRandomString(32),
      content,
      username: owner?.username ?? null,
      schema: '1',
      json: null,
      type: MessageType.GENERAL,
      createdAt: isoDate,
      updatedAt: isoDate,
      deletedAt: null,
      owner,
      pictures: [],
      deletedBy: null,
    });

    message.state = MessageState.SENT;

    return message;
  }

  /**
   * Fixes: "Cannot stringify arbitrary non-POJOs Message" warning
   */
  toJSON(): Message {
    return { ...this };
  }
}
