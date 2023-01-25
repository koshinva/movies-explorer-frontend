import React, { createContext } from 'react';

export const CurrentUserContext = createContext(null);

function CurrentUserProvider({ children, value }) {
  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>;
}

export default CurrentUserProvider;
