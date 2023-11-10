import { Http } from '@/Services/HttpConfig';
const UserGetImage = async value => {
  return await Http.get(`/img${value}`);
};
export default UserGetImage;
