export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";
export const FETCH_LOCALSTORAGE = "FETCH_LOCALSTORAGE";

export const apiDataState = {
  loading: false,
  data: [],
  error: "",
};

export const apiReducer = (state = apiDataState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };

    case FETCH_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: "",
      };

    case FETCH_FAILED:
      return {
        loading: false,
        data: [],
        error: payload,
      };
    case FETCH_LOCALSTORAGE:
      return {
        loading: false,
        data: [...payload, ...state.data],
        error: "",
      };

    default:
      return state;
  }
};
