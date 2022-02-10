// code example chat firebase

import { RoomChat } from '@/@types';
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

export async function getRooms(user_id: string) {
  const rooms = query(
    collection(firebase_fire_store, 'rooms'),
    orderBy('createdAt', 'desc'),
    limit(3),
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
      messages: data.messages,
    });
  });

  return results;
}
