import { db } from '../database/connection'
import { collection, query, where, getDocs } from 'firebase/firestore';

async function getCities(db) {
    const q = query(collection(db, "users"), where("name", "==", "Frisby"));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().name);
    });
}
