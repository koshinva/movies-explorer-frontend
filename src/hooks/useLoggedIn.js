import { useContext } from 'react';
import { IsLoggedInContext } from '../hok/IsLoggedInProvider';

export const useLoggedIn = () => {
  return useContext(IsLoggedInContext);
};
