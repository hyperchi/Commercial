import Request from 'superagent';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT';

function updateSearchResult(data) {
  return {
    type: RECEIVE_SEARCH_RESULT,
    data: data
  };
}

// request to call api for search
export function getSearchResultRequest(key_words) {

    return (dispatch, getState) => {
        console.error(dispatch);
    // let url =  "http://localhost:12345/amazon_api";
    let url =  "http://ec2-54-200-195-246.us-west-2.compute.amazonaws.com:12345/amazon_api";
    return Request.get(url)
        .query({"optional1":key_words})
        .then((response) => JSON.parse(response.text))
        .then(json => dispatch(updateSearchResult(json)));
    }

}
export function incrementAsync(delay = 1000) {
    alert(delay);
  return dispatch => {
    setTimeout(() => {
      alert(dispatch)
    }, delay)
  }
}