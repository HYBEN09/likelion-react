import { useLayoutEffect } from 'react';

// 사용자 정의 훅
// use 접두사를 사용하는 함수
// 웹 문서의 제목을 변경하는 훅
// 사이드 이펙트

/**
 * 문서 제목 변경 React 커스텀 훅
 * @param {string} titleContent 웹 문서 제목
 */

export const useDocumentTitle = (titleContent) => {
  useLayoutEffect(() => {
    document.title = titleContent;
  }, [titleContent]);
};
