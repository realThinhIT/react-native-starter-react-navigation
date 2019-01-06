import { AsyncStorage } from 'react-native';
import { jsonify, dejson } from './json-helper';

export const updateStorage = async (storageName = ``, newDetails = {}) => {
  let data = {};

  try {
    data = await getStorageData(storageName);
  } catch (e) { console.error('StorageHelper: ', e); }

  Object.keys(newDetails).forEach(key => {
    if (data && newDetails[key]) {
      data[key] = newDetails[key];
    }
  });
  
  await AsyncStorage.setItem(storageName, jsonify(data));

  return true;
};

export const getStorageData = async (storageName = ``) => {
  try {
    const value = await AsyncStorage.getItem(storageName);
    if (value == null) throw Error();

    return dejson(value);
  } catch (e) {
    return {};
  }
};