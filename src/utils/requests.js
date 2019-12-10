import { HOST } from 'react-native-dotenv';

export default function request(pathname, method, data) {
  return fetch(`http://${HOST}:3030/api/${pathname}`, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
