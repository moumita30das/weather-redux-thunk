import { FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR,API_CALL_RESTORE } from '../constants'

const initialState = {
    isLoading:false,
    weatherReports:[],
    error: '',
    isShowList:false
   };

   const weatherReducer = (state = initialState , action) => {
       console.log('reducer---actiontype',action.type);
       console.log('reducer---action.payload',action.payload);
       console.log('reducer---state',state);
       switch(action.type) {
           case FETCH_REQUEST:
               return {
                   ...state,
                   isLoading:true,
                   isShowList:false
               }
             case FETCH_SUCCESS:
                 return {
                     ...state,
                     isLoading:false,
                     weatherReports:action.payload,
                     error:'',
                     isShowList:true
                     
                 } 
                case FETCH_ERROR:
                    return {
                        ...state,
                        isLoading:false,
                        weatherReports:[],
                        error:action.payload,
                        isShowList:false
                    }  
                case API_CALL_RESTORE:
               return { ...state, isLoading: false, error:'',isShowList:true }
               default:
                   return state;
       }
   }
   
   export default weatherReducer;