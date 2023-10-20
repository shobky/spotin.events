import {
  getFirestore,
  collection,
  query,
  getDocs,
  limit,
} from "firebase/firestore";
import { db } from "@/firebase/config";

export const getEvents = async (n?: number) => {
  let data: any[] = [];
  const q = query(collection(db, "events"), limit(n || 100));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    let buffer = {
      id: doc.id,
      ...doc.data(),
    };
    data.push(buffer);
  });
  return data;
};
