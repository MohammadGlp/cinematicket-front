import Cookie from 'js-cookie';

export const getUserData = () => (Cookie.get('userData') ? JSON.parse(Cookie.get('userData')) : '');

export const getAdminData = () =>
  Cookie.get('adminData') ? JSON.parse(Cookie.get('adminData')) : '';
