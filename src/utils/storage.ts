// SET STORAGE
const setAuthkey = (authkey: any) => {
  localStorage.setItem('authkey', JSON.stringify(authkey));
};

// GET FROM STORAGE
const getAuthkey = () => localStorage.getItem('authkey');

// Remove items from storage
export const removeItemFromStorage = (key: any) => localStorage.removeItem(key);

export { setAuthkey, getAuthkey };
