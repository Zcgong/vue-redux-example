const initialState = {
  msg: 'test',
  list: [1, 2, 3]
};

export default function rootReducer(state=initialState, action) {
  switch(action.type) {
    case 'msg':
      return {
        ...state,
        msg: action.data
      };
      case 'list':
        return {
          ...state,
          list: action.data
        };
    default:
      return state;
  }

  return state;
}
