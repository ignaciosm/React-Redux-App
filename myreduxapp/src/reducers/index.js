import {
  FETCH_DOGS_LOADING,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILED
} from "../actions";

const initialState = {
  dogs: [],
  error: null,
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_DOGS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_DOGS_SUCCESS:
      console.log('FETCH_DOGS_SUCCESS', action.payload )
      return {
        ...state,
        dogs: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_DOGS_FAILED:
      return {
        ...state,
        dogs: [],
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
