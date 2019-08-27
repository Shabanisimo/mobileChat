const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const stringValid = (str, minLen, maxLen) => {
  if (!maxLen) {
    maxLen = str.length;
  }
  if (str.length >= minLen && str.length <= maxLen) {
    return true;
  }
  return false;
};

export const emailValid = email => regExp.test(String(email).toLowerCase());
