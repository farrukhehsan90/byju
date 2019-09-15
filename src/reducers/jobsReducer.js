import { LOADING,GET_JOBS,GET_JOB,SAVE_JOB } from "../actions/types";

const initialState = {
  searchField: "",
  jobs: [],
  allJobs:[],
  job: {},
  loading: false
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
        return {
            ...state,
            loading:true
        }
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload.jobs,
        allJobs:action.payload.allJobs,
        loading: false
      };
    case SAVE_JOB:
      return {
        ...state,
        job: action.payload[0],
        loading: false
      };

    default:
      return state;
  }
};

export default jobsReducer;
