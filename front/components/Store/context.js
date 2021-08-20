import { createContext } from 'react';

export const initialState = {
    IsLogin:true,
}

const Store = createContext(initialState);

export default Store;