import { useContext } from 'react';
import { CurrentUserContext } from '../hok/CurrentUserProvider';

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};
