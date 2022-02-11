// code example chat firebase

import { ChatMember, ChatMessage, RoomChat } from '@/@types';
import { firebase_fire_store } from '@/config';
import {
  addDoc,
  doc as DocFireStore,
  collection,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  getDoc,
  Timestamp,
} from 'firebase/firestore';

export async function createDocChat<T>(
  doc: string,
  data: T | { [key: string]: any }
) {
  return await addDoc(collection(firebase_fire_store, doc), data);
}

export async function updateDocChat<T>(
  doc: string,
  docKey: string,
  data: { [key: string]: T }
) {
  return await updateDoc(DocFireStore(firebase_fire_store, doc, docKey), data);
}

export async function removeDocChat(doc: string, docKey: string) {
  return await deleteDoc(DocFireStore(firebase_fire_store, doc, docKey));
}

export async function getRoomsByUserId(user_id: string) {
  const rooms = query(
    collection(firebase_fire_store, 'rooms'),
    orderBy('createdAt', 'desc'),
    // limit(3),
    where(`hostId`, '==', user_id)
  );

  const snapshot = await getDocs(rooms);

  const results: RoomChat[] = [];

  snapshot.docChanges().forEach((item) => {
    const data: RoomChat = item.doc.data();
    results.push({
      id: item.doc.id,
      name: data.name,
      avatar: data.avatar,
      lastMessage: data.lastMessage,
      host: data.host,
      hostId: data.hostId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      members: data.members,
    });
  });

  return results;
}

export async function getMessagesByRoomKey(key: string) {
  const messages = query(
    collection(firebase_fire_store, 'messages'),
    orderBy('createdAt', 'asc'),
    where(`groupId`, '==', key)
  );

  const snapshot = await getDocs(messages);

  const results: ChatMessage[] = [];

  snapshot.docChanges().forEach((item) => {
    const data: ChatMessage = item.doc.data();

    results.push({
      id: item.doc.id,
      sender: data.sender,
      content: data.content,
      createdAt: data.createdAt,
      groupId: data.groupId,
      updatedAt: data.updatedAt,
    });
  });

  return results;
}

export async function getCurrentRoom(room_id: string) {
  const room = DocFireStore(firebase_fire_store, 'rooms', room_id);

  const docSnap = await getDoc(room);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export function convertTimeStamp(seconds: number, nanoseconds: number) {
  const time = new Timestamp(seconds, nanoseconds);
  return time.toDate();
}

export function sendFirebaseMessage(data: ChatMessage) {
  return createDocChat<ChatMessage>('messages', {
    ...data,
  })
    .then((result) => result)
    .catch((e) => e);
}

export function createFirebaseRoom(data: RoomChat) {
  return createDocChat<RoomChat>('rooms', {
    ...data,
  })
    .then((result) => result)
    .catch((e) => e);
}

export function createFirebaseMember(data: ChatMember) {
  return createDocChat<ChatMember>('members', {
    ...data,
  })
    .then((result) => result)
    .catch((e) => e);
}
