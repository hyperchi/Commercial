const LOAD = '@async/LOAD';
const LOAD_SUCCESS = '@async/LOAD_SUCCESS';
const LOAD_FAIL = '@async/LOAD_FAIL';

export function load(key) {
  return { type: LOAD, payload: { key } }
}
export function loadSuccess(key, data) {
  return { type: LOAD_SUCCESS, payload: { key, data } }
}
export function loadFail(key, error) {
  return { type: LOAD_FAIL, payload: { key, error } }
}

export const initialState = {
  loadingNumber: 0,
  loadState: {},
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loadingNumber: state.loadingNumber + 1,
        loadState: {
          ...state.loadState,
          [action.payload.key]: {
            loading: true,
            loaded: false,
          }
        }
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loadingNumber: state.loadingNumber - 1,
        loadState: {
          ...state.loadState,
          [action.payload.key]: {
            loading: false,
            loaded: true,
            error: null,
          },
        },
        [action.payload.key]: action.payload.data
      };
    case LOAD_FAIL:
      return {
        ...state,
        loadingNumber: state.loadingNumber - 1,
        loadState: {
          ...state.loadState,
          [action.payload.key]: {
            loading: false,
            loaded: false,
            error: action.payload.error,
          },
        }
      };
    default:
      return state;
  }
}


