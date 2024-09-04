import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_STORAGE_KEY } from './user-storage-config'

async function getUserStorage() {
  const response = await AsyncStorage.getItem(USER_STORAGE_KEY)

  const userStorage = response ? (JSON.parse(response) as UserDTO) : null

  return userStorage
}

async function saveUserStorage(userStorage: UserDTO) {
  await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userStorage))
}

async function deleteUserStorage() {
  await AsyncStorage.removeItem(USER_STORAGE_KEY)
}

export { getUserStorage, saveUserStorage, deleteUserStorage }
