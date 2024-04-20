import { create } from 'zustand';

const useStore = create((set) => ({
  isLoggedIn: false,
  token: null,
  login: async (email, password) => {
    try {
      const { data } = await loginUser({
        variables: { email, password }
      });
      const token = data.login.token;

      set({ isLoggedIn: true, token });
      localStorage.setItem('token', token);
      return true;
    } catch (error) {
      console.error('Login failed oi:', error);
      return false;
    }
  },
  setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));

export default useStore;
