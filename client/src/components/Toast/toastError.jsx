import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Componente toastError
export default function toastError(error) {
    toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme:"dark"
    });
};
