import { useEffect, useLayoutEffect } from 'react';

export function EventSubUnsub() {
  useLayoutEffect(() => {
    console.log('UseLayoutEffect');
  }, []);

  useEffect(() => {
    console.log('useEffect');
    setInterval(() => {
      console.count('count');
    }, 3000);
  }, []);

  return <div>EventSubUnsub</div>;
}
