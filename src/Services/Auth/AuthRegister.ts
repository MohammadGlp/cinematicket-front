import { Http } from '@/Services/HttpConfig';
import { ApiUserAuth } from '@/Types/Services';

const AuthRegister = async (userData: Pick<ApiUserAuth, 'tel' | 'password' | 'repeatPass'>) =>
  await Http.post('/auth/signup', {
    tel: userData.tel,
    password: userData.password,
    repeatPass: userData.repeatPass,
  });

export default AuthRegister;
