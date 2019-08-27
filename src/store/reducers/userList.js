const initialState = [];

export default function userList(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USERLIST':
      return [
        ...action.payload,
      ];
    case 'REMOVE_USERLIST':
      return [];
    default:
      return state;
  }
}
