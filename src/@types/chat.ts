export class TimeStamp {
  seconds!: number;
  nanoseconds!: number;
}

export interface ChatMessage {
  content?: string;
  sender: ChatMember;
  createdAt?: TimeStamp | Date;
  updatedAt?: TimeStamp | Date;
  id?: string;
  groupId?: string;
}

export interface ChatMember {
  uid?: string;
  name?: string;
  avatar?: string;
  email?: string;
}

export interface RoomChat {
  id?: string;
  name?: string;
  avatar?: string;
  lastMessage?: string;
  host?: ChatMember;
  hostId?: string;
  createdAt?: TimeStamp | Date;
  updatedAt?: TimeStamp | Date;
  members?: { [key: string]: ChatMember };
}

export interface RoomChatData {
  [key: string]: RoomChat;
}
