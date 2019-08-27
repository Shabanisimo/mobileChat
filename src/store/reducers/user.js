const initialState = {
  userInfo: {},
  isLoad: false,
};

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INFO':
      return {
        userInfo: { ...action.payload },
        isLoad: true,
      };
    case 'DELETE_USER_INFO':
      return {
        userInfo: {},
        isLoad: false,
      };
    default:
      return state;
  }
}
