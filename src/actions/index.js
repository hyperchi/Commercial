import Request from 'superagent'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const RECEIVE_SEARCH_RESULT = 'RECEIVE_SEARCH_RESULT'

// request to call api for search
export function getSearchResultRequest(key_words) {
    // let url =  "http://localhost:12345/amazon_api";
    let url =  "http://ec2-54-200-195-246.us-west-2.compute.amazonaws.com:12345/amazon_api";
            //console.error(url);
    let search_index = "Book";
    let item_page = 1;
    Request.get(url)
        .query({"key_words":key_words,"search_index": search_index, "item_page": item_page})
        .then((response) => {
            let res = JSON.parse(response.text);
            //console.error(res);
        });
}
