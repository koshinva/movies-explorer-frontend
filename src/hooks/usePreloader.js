import { useContext } from 'react';
import { PreloaderContext } from '../hok/PreloaderProvider';

export const usePreloader = () => useContext(PreloaderContext);
