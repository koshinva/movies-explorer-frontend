import React, { createContext } from 'react';

export const PreloaderContext = createContext(null);

function PreloaderProvider({ children, value }) {
  return <PreloaderContext.Provider value={value}>{children}</PreloaderContext.Provider>;
}

export default PreloaderProvider;
