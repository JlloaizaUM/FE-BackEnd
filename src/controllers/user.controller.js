import { db } from '../database/connection';
import { getDoc, doc } from 'firebase/firestore';

export async function getUsers(req, res, id) {
    const docRef = doc(db, "users", "6ClOZsipScOpDMG8GzdW");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
