import React, { createContext } from 'react';

export const IsLoggedInContext = createContext(null);

function IsLoggedInProvider({ value, children }) {
  return <IsLoggedInContext.Provider value={value}>{children}</IsLoggedInContext.Provider>;
}

export default IsLoggedInProvider;
