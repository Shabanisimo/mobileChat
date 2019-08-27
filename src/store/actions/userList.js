import request from '../../utils/requests';

const loadUserList = userList => ({
  type: 'LOAD_USERLIST',
  payload: userList,
});

export const removeUserList = () => ({
  type: 'REMOVE_USERLIST',
});

export const asyncLoadUserList = () => (dispatch) => {
  request('user/getUserList', 'GET').then((data) => {
    dispatch(loadUserList(data));
  });
};
