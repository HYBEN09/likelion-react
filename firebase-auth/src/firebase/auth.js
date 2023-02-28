import { app } from './app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const auth = getAuth(app);

/**
 * Firebase 인증(auth) 회원가입 유틸리티 함수
 * @param {string} email 회원가입할 이메일 주소
 * @param {string} password 회원가입할 패스워드 6자리 이상
 * @returns {Promise <UserCredential>} 사용자 정보 Promise 객체로 반환
 */

export async function createAuthUser({ email, password }) {
  //* 회원가입 기능(Firebase Auth 요청)
  try {
    // console.log('회원가입 시도 → Firebase Authentication');
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);
  } catch ({ code, message }) {
    // console.error({ errorCode: code, errorMessage: message });
    switch (code) {
      case 'auth/email-already-in-use':
        console.error('이미 가입된 유저의 이메일 입니다.');
        break;
      case 'auth/weak=password':
        console.error(
          'firebase 인증 서비스는 6자리 이상 비밀번호 입력이 요구됩니다.'
        );
        break;

      case 'auth/invalid-email':
        console.error('유효한 이메일 주소가 아닙니다.');
        break;
      default:
        break;
    }
  }
}