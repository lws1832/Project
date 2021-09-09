import { createContext } from 'react';

//사용자 인증 정보 저장
export const CredentialsContext = createContext({storedCredentials: {}, setStoredCredentials: ()=>{}});