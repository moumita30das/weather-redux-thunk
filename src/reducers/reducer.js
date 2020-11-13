import { State } from 'react-native-gesture-handler';
import { LOGIN_CLICK } from '../constants';


const initialState = {
 isLoggedIn:false
};
const loginReducer = (state = initialState , action) => {
    console.log('reducer---actiontype',action.type);
    switch(action.type) {
        case LOGIN_CLICK:
            return {
                isLoggedIn: !state.isLoggedIn
            };
            default:
                return state;
    }
}

export default loginReducer;



//constant > action > dispatch action >