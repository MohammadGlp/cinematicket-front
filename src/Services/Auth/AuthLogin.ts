import { Http } from '@/Services/HttpConfig';
import { ApiUserAuth } from '@/Types/Services';

const AuthLogin = async (userData: Pick<ApiUserAuth, 'login' | 'password'>) =>
  await Http.post('/auth/login', {
    login: userData.login,
    password: userData.password,
  }).then(({ data }) => data);

export default AuthLogin;
