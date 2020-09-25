import axios from 'axios';

export const FETCH_JOKE = "FETCH_JOKE";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";


const url = "https://cors-anywhere.herokuapp.com/";


export const fetchData = () => (dispatch) => {
    dispatch({ type: FETCH_JOKE });


    axios
    .get(url + "http://www.ourmanna.com/verses/api/get?format=text&order=random") 
    .then((res) => {
            console.log("fetch", res);
            dispatch({
                type: FETCH_JOKE_SUCCESS,
                payload: res.data
            });
        }) 
        .catch((err) => {
            console.error("did not get joke", err.message);
            dispatch({ 
                type: FETCH_JOKE_FAIL,
                payload: err
             });
        });
}