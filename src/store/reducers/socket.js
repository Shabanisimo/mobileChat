const initialState = {
  socket: {},
  socketConnect: false,
};

export default function socket(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SOCKET':
      return {
        socket: action.payload.socket,
        socketConnect: true,
      };
    case 'DELETE_SOCKET':
      return {
        socket: {},
        socketConnect: false,
      };
    default:
      return state;
  }
}
