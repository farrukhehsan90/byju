import { LOADING,GET_JOBS,GET_JOB,SAVE_JOB,LOGIN,ERROR } from "../actions/types";

const initialState = {
  isAuthenticated:false,
  user:'',
  loading: false,
  error:{}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
        return {
            ...state,
            loading:true
        }
    case LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.username,
        loading: false
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
   
    default:
      return state;
  }
};

export default authReducer;
