import Request from 'superagent';
import { push } from 'react-router-redux'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';
export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
function updateSearchResult(data) {
  return {
    type: RECEIVE_SEARCH_RESULT,
    data: data
  };
}

// request to call api for search
export function getSearchResultRequest(key_words) {

    // return (dispatch, getState) => {
    //     console.error(dispatch);
    //     // let url =  "http://localhost:12345/amazon_api";
    //     let url =  "http://ec2-54-200-195-246.us-west-2.compute.amazonaws.com:12345/amazon_api";
    //     let search_index = "Book";
    //     let item_page = 1;    
    //     // return Request.get(url)
    //     //     .query({"key_words":key_words,"search_index": search_index, "item_page": item_page})
    //     //     .then((response) => JSON.parse(response.text))
    //     //     // .then(json => dispatch(updateSearchResult(json)));
    //     //     .then(json => dispatch(updateSearchResult({a:1})));
    //     // }
    //     return dispatch => {
    //         setTimeout(() => {
    //             dispatch(updateSearchResult({a:1}))
    //         }, 1000);
    //     }
    // }

    return (dispatch, getState) => {
        // console.error(dispatch);
        //let url =  "http://localhost:12345/amazon_api";
        let url =  "http://ec2-54-200-195-246.us-west-2.compute.amazonaws.com:12345/amazon_api";
        let search_index = "Books";
        let item_page = 1;  
        dispatch({type: LOAD_START});  
        Request.get(url)
            .query({"key_words":key_words,"search_index": search_index, "item_page": item_page})
            .then((response) => {
              dispatch({type: LOAD_SUCCESS});  
              return JSON.parse(response.text)
            })
            .then(json => dispatch(updateSearchResult(json)));
    }

}
export function incrementAsync(delay = 1000) {

  return dispatch => {
    setTimeout(() => {
      alert(dispatch)
    }, delay)
  }
}
export function showDetail(key, event) {

    event.preventDefault();
    const path = '/detail/' + key;
    return push(path);
}