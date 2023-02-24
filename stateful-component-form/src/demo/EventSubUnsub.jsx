import { useEffect } from 'react';

export function EventSubUnsub() {
  useEffect(() => {
    console.log('타이머 구독 연결 ');
    setInterval(() => {
      console.count('count');
    }, 3000);
  }, []);

  return <div>EventSubUnsub</div>;
}
