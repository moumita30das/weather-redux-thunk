import { useDispatch } from 'react-redux'
import { LOGIN_CLICK } from '../constants'

export const checkLogin = (isLoggedIn) =>{
    return {
        type: LOGIN_CLICK,
        payload: isLoggedIn
    }

}




//constant > action > dispatch action >