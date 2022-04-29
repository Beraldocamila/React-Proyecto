
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import db from '../utils/firebaseConfig';

export const fetchFirestore = async (idCategory) =>{
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('categoryId', '==', idCategory));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }

    const querySnapshot = await getDocs(q);
    const dataFirestore = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
    }));
    
    return dataFirestore;
}
