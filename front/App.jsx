import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import NaviMenu from './components/navigator/NaviMenu';
import Login from './components/Login';

export default function App(){
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    // setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  return isLoading ? <Loading /> : <Login />;
}