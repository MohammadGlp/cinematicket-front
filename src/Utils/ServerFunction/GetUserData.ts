import { cookies } from 'next/headers';
import { UserData } from '@Types/Services';
import jwt_decode from 'jwt-decode';
export default async function getUserData(): Promise<UserData | null> {
  const cookiesList = cookies();
  const jwt = cookiesList.get('authToken')?.value;
  if (!jwt) return null;
  else return jwt_decode(jwt);
}
