import axios from 'axios';

export const FETCH_DOGS_LOADING = "FETCH_DOGS_LOADING";
export const FETCH_DOGS_SUCCESS = "FETCH_DOGS_SUCCESS";
export const FETCH_DOGS_FAILED = "FETCH_DOGS_FAILED";

export const dogsLoading = () => ({ type: FETCH_DOGS_LOADING });
export const dogsLoadSuccess = data => ({
  type: FETCH_DOGS_SUCCESS,
  payload: data
});
export const dogsLoadFailure = error => ({
  type: FETCH_DOGS_FAILED,
  payload: error
});

export function fetchDogs() {
  console.log('action fetchDogs')
  return function(dispatch) {
    dispatch(dogsLoading());


    // return fetch(`https://dog.ceo/api/breed/retriever/images`)
    // .then(response => response.json())
    // .then(json =>
    //   dispatch(dogsLoadSuccess(json.results))
    // )
    // .catch(error => dispatch(dogsLoadFailure(error)));

    return axios.get('https://dog.ceo/api/breed/retriever/images')
    .then(function (response) {
      // handle success
      console.log('res', response.data.message);
      dispatch({ type: FETCH_DOGS_SUCCESS, payload: response.data.message })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  };
}
