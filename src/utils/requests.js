export default function request(pathname, method, data) {
  return fetch(`http://192.168.1.255:3030/api/${pathname}`, {
    method: `${method}`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
