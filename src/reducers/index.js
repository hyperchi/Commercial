import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {
  RECEIVE_SEARCH_RESULT, LOAD_START, LOAD_SUCCESS,
} from '../actions'

// function posts(state = {
//   //是否正在获取最新
//   isFetching: false,
//   //是否废弃
//   didInvalidate: false,
//   //内容
//   items: []
// }, action) {
//   switch (action.type) {
//     case INVALIDATE_REDDIT:
//       return Object.assign({}, state, {
//         didInvalidate: true
//       });
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         isFetching: true,
//         didInvalidate: false
//       });
//     case RECEIVE_POSTS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       });
//     default:
//       return state
//   }
// }

//废弃、接收到、开始接受新闻后，将state.postsByReddit设为相关参数
function searchQuote(state = { data : {} }, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULT:
      return Object.assign({}, state, {
        data: action.data
      });

    default:
      return state
  }
}

function asyns(state = { 
  data : undefined,
  loadingNumber: 0
}, action) {
  switch (action.type) {
    case LOAD_START:
      // return Object.assign({}, state, {
      //   data: action.data
      // });
     return {
        ...state,
        loadingNumber: state.loadingNumber + 1,
     };   
    case LOAD_SUCCESS:
      // return Object.assign({}, state, {
      //   data: action.data
      // });
     return {
        ...state,
        loadingNumber: state.loadingNumber - 1,
     };   
    default:
      return state
  }
}
//将两个reducer合并成一个reducer,也就将全局的state加上postsByReddit,selectedReddit两个属性，每个属性都有自己的state
const rootReducer = combineReducers({
  asyns,
  searchQuote,
  routing: routerReducer
});

export default rootReducer
