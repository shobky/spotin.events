import {
  collection,
  query,
  getDocs,
  limit,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { EventT } from "@/types";

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

export const getEvent = async (id: string) => {
  try {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data: any = { id: docSnap.id, ...docSnap.data() };
      return { event:data, err: null };
    } else {
      return { event: null, err: "doc not found" };
    }
  } catch (err) {
    return { event: null, err };
  }
};
