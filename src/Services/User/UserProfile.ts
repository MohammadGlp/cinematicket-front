import { Http } from '@Services/HttpConfig';
import { AxiosHeaders, RawAxiosRequestHeaders } from 'axios';

const UserProfile = async (headers: RawAxiosRequestHeaders | AxiosHeaders = {}) => {
  return await Http.get('/user/profile', {
    headers: { ...headers },
  }).then(({ data }) => data);
};

export default UserProfile;
