import { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';


const ItemDetailContainer = () =>{

    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        const oneProductfirestore = async (idItem) => {
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
              // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        oneProductfirestore(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );



}

export default ItemDetailContainer;