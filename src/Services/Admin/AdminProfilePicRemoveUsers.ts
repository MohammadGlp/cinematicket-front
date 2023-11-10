import { adminRequest } from '@/Services/HttpConfig';

const AdminProfilePicRemoveUsers = async user_id => {
  return await adminRequest.delete(`/userProfile/${user_id}/removeProfilePic`);
};

export default AdminProfilePicRemoveUsers;
