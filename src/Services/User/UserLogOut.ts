import { Http } from '@/Services/HttpConfig';

const UserLogOut = async () => {
  return await Http.post('/user/logout');
};

export default UserLogOut;
