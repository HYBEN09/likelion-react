// import { debounce } from '@/utils';
//* lodash library 사용
import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';

/**
 * 사용자의 마우스 x, y 위치 값을 반환하는 React 커스텀 훅
 * @returns {{ x: number, y: number }} 마우스 x, y 위치
 */

export function useMouse(recordTime = 300) {
  const [x, updateX] = useState(0);
  const [y, updateY] = useState(0);

  useEffect(() => {
    const EVENT_TYPE = 'mousemove';
    const handleMouseMove = debounce((e) => {
      updateX(e.pageX);
      updateY(e.pageY);
    }, recordTime);

    // 이벤트 구독
    globalThis.addEventListener(EVENT_TYPE, handleMouseMove);

    //이벤트 구독 해지
    return () => {
      globalThis.addEventListener(EVENT_TYPE, handleMouseMove);
    };
  }, []);

  return { x, y }; // {x:0, y:0}
}
