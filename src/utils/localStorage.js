import { AsyncStorage } from 'react-native';

export function getItemFromStorage(key) {
  return AsyncStorage.getItem(key);
}

export async function setItemToStorage(key, token) {
  await AsyncStorage.setItem(key, token);
}

export async function removeItemFromStorage(key) {
  await AsyncStorage.removeItem(key);
}

export async function removeAllItems() {
  await AsyncStorage.clear();
}
