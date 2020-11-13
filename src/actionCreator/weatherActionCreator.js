import axios from 'axios';
import { fetchRequest, fetchSuccess, fetchError } from '../actions/apiAction';

const fetchActionCreator = (zipCode) => {
    return function(dispatch) {
        dispatch(fetchRequest()); 
        axios.get('https://api.openweathermap.org/data/2.5/forecast',{
               params: {
                 zip: zipCode,
                 appid: '7c3d9c050c2c798eb37a14ae8127a0a8'
                 //'b6907d289e10d714a6e88b30761fae22' 
               }
            })
        .then(response=>{
            const report = response.data.list;
            console.log(response);
            dispatch(fetchSuccess(report));
        })
        .catch(error=> {
            dispatch(fetchError(error));
            console.log(error);
        })
    }
    }
export default fetchActionCreator;