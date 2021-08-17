import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import NaviMenu from './components/navigator/NaviMenu';
import Login from './components/Login';
import Test from './components/Test';

export default function App(){
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  return isLoading ? <Loading /> : <Test />;
}