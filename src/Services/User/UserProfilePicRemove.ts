import { Http } from '@/Services/HttpConfig';

const UserProfilePicRemove = () => {
  return Http.delete('/user/profilePic/remove');
};

export default UserProfilePicRemove;
