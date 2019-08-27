const initialState = {
  roomList: {},
  activeRoom: {
    roomId: undefined,
    roomName: '',
    userList: [],
  },
};

export default function roomList(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_ROOMS':
      return {
        ...state,
        roomList: { ...action.payload },
      };
    case 'ADD_ROOM':
      return {
        ...state,
        roomList: { ...state.roomList, ...action.payload },
      };
    case 'UPDATE_ROOM_INFO':
      return {
        ...state,
        activeRoom: { ...action.payload },
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        roomList: {
          ...state.roomList,
          [action.payload.RoomId]: {
            ...state.roomList[action.payload.RoomId],
            Messages: [
              ...state.roomList[action.payload.RoomId].Messages, action.payload,
            ],
          },
        },
      };
    case 'DELETE_ROOMS':
      return {};
    default:
      return state;
  }
}
