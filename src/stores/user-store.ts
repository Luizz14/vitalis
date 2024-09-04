import {
  deleteUserStorage,
  getUserStorage,
  saveUserStorage,
} from '@/storage/user-storage'
import { create } from 'zustand'

type State = {
  user: UserDTO | null
  isSession: boolean
}

type Actions = {
  setUser: (user: UserDTO | null) => void
  getUser: () => UserDTO | null
  saveUserOnStorage: (user: UserDTO) => void
  logout: () => void
  loadUser: () => void
}

const useUserStore = create<State & Actions>((set, state) => ({
  user: null,
  isSession: false,
  setUser: (user: UserDTO | null) => set({ user }),

  logout: async () => {
    await deleteUserStorage()

    set({ user: null })
  },

  getUser: () => state().user,

  saveUserOnStorage: async (user: UserDTO) => {
    await saveUserStorage(user)
    set({ user })
  },

  loadUser: async () => {
    const user = await getUserStorage()

    if (user) set({ isSession: true })
    if (state().user === user) return

    state().setUser(user)
  },
}))

export { useUserStore }
