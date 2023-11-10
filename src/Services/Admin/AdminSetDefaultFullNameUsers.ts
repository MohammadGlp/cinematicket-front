import { adminRequest } from '@/Services/HttpConfig';

const AdminSetDefaultFullNameUsers = async user_id => {
  return await adminRequest.put(`/userProfile/${user_id}/setDefaultFullName`);
};

export default AdminSetDefaultFullNameUsers;
