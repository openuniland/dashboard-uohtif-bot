// SET STORAGE
const setAuthkey = (authKey: any) => {
  localStorage.setItem('authKey', JSON.stringify(authKey));
};

// GET FROM STORAGE
const getAuthkey = () => JSON.parse(localStorage.getItem('authKey') || '""');

// Remove items from storage
export const removeItemFromStorage = (key: any) => localStorage.removeItem(key);

export { setAuthkey, getAuthkey };
