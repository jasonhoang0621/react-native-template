import AsyncStorage from '@react-native-async-storage/async-storage';

const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return token;
    }
    return '';
  } catch (e) {
    console.log(e);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (e) {
    console.log(e);
  }
};

export {setToken, getToken, removeToken};
