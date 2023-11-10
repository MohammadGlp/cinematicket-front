import { adminRequest } from '@Services/HttpConfig';

const AdminGetProfile = async (admin_id, headers = {}) => {
  return await adminRequest.get(`/profile/${admin_id}`, {
    headers: { ...headers },
  });
};

export default AdminGetProfile;
