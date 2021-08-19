// import React, { useEffect, useState } from 'react';

// import Loading from './components/Loading';
// import NaviMenu from './components/navigator/NaviMenu';
// import Login from './components/Login';

// export default function App(){
//   const [isLoading,setIsLoading] = useState(true);

//   useEffect(()=>{
//     // setIsLoading(false);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   }, [])

//   return isLoading ? <Loading /> : <Login />;
// }


import React, { useState } from 'react';



// React navigation stack
import RootStack from './navigators/RootStack';
import Signup from './components/Signup';
import NaviMenu from './components/navigator/NaviMenu';
import Googlelogin from './components/Googlelogin';
import Username from './components/user';
// apploading
import AppLoading from 'expo-app-loading';

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './components/CredentialsContext';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem('flowerCribCredentials')
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return <AppLoading startAsync={checkLoginCredentials} onFinish={() => setAppReady(true)} onError={console.warn} />;
  }

  return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <RootStack />
    
      
    </CredentialsContext.Provider>
  );
}
