export interface ChatMessage {
  content?: string;
  sender?: string;
  senderId?: string;
  avatar?: string;
  createdAt?: Date;
  id?: string;
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
  createdAt?: Date;
  updatedAt?: Date;
  members?: { [key: string]: ChatMember };
  messages?: { [key: string]: ChatMessage };
}

export interface RoomChatData {
  [key: string]: RoomChat;
}
