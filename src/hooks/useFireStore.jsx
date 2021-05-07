import { useState, useEffect } from "react";
import { firestore } from "../firebase/config.js";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.docs.map((doc) => {
          let data = doc.data();
          data["id"] = doc.id;
          documents.push(data);
        });
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFireStore;
