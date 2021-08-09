import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import NaviMenu from './components/navigator/NaviMenu';

export default function App(){
  const [isLoading,setIsLoading] = useState(true);
  console.log('1 : ', isLoading);

  useEffect(()=>{
    setIsLoading(false);
    console.log('2 : ',isLoading);
  },[])

  return isLoading ? <Loading /> : <NaviMenu />;
}