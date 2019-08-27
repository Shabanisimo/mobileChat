import { combineReducers } from 'redux';
import userInfo from './user';
import roomList from './room';
import socket from './socket';
import userList from './userList';

export default combineReducers({
  userInfo,
  roomList,
  socket,
  userList,
});
