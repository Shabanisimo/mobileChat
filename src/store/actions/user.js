import request from '../../utils/requests';
import { getItemFromStorage, setItemToStorage, removeItemFromStorage } from '../../utils/localStorage';

const addUserInfo = (userInfo) => ({
  type: 'ADD_INFO',
  payload: userInfo,
});

export const removeUserInfo = () => ({
  type: 'DELETE_USER_INFO',
});

export const logOut = () => (dispatch) => removeItemFromStorage('token')
  .then(() => {
    dispatch(removeUserInfo());
  });

export const asyncGetUserInfo = () => (dispatch) => {
  getItemFromStorage('token')
    .then((token) => {
      request('user/getInfo', 'POST', { token })
        .then((data) => dispatch(addUserInfo(data)))
        .catch((err) => console.log(err));
    });
};

export const asyncAuthorization = (email, password) => (dispatch) => request('user/signin', 'POST', { email, password })
  .then((data) => {
    if (!data.error) {
      setItemToStorage('token', data.token);
      dispatch(addUserInfo(data));
      return true;
    }
    return false;
  });

export const asyncGoogleSignIn = (token) => (dispatch) => request('user/signin/google', 'POST', { token })
  .then((data) => {
    setItemToStorage('token', data[0].token);
    dispatch(addUserInfo(data[0]));
  })
  .catch((err) => console.log(`ERROR ${err}`));

export const asyncRegistration = (name, surname, email, password) => (dispatch) => request('user/registration', 'POST', {
  name,
  surname,
  email,
  password,
})
  .then((data) => {
    if (!data.error) {
      setItemToStorage('token', data.token);
      dispatch(addUserInfo(data));
      return true;
    }
    return false;
  });

export const updateUserInfo = (name, surname, email) => (dispatch, getState) => {
  const {
    userInfo: {
      token,
      id,
    },
    userInfo,
  } = getState().userInfo;
  return request('user/updateUserInfo', 'PUT', {
    name,
    surname,
    email,
    token,
  })
    .then((data) => {
      const { name, surname, email } = data;
      userInfo.name = name;
      userInfo.surname = surname;
      userInfo.email = email;
      dispatch(addUserInfo(userInfo));
    });
};
