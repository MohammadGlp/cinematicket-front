import { Http } from '@/Services/HttpConfig';
import { ApiUserAuth } from '@/Types/Services';

const AdminLogin = async ({ tel, password }:Pick<ApiUserAuth, 'tel' | 'password'>) => {
  return await Http.post('/admin/login', {
    tel,
    password
  });
};

export default AdminLogin;
