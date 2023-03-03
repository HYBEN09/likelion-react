import { useRef } from 'react';
import { BaseLayout, FormInput, Button, Notification } from '@/components';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import classes from './SignUp.module.scss';
import { createAuthUser } from '@/firebase/auth';
import { useToggle } from '@/hooks/useToggle';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

// useState    - 상태 관리 (상태 업데이트 → 리-렌더링(UI 업데이트))
// useLayoutEffect - 사이드 이펙트 (페인트 이전)
// useEffect   - 사이드 이펙트 (DOM 요소 접근/조작, 네트워크 요청/응답, 이벤트 구독/취소, 오류 처리 : 페인트 이후)
// useRef      - 1. DOM 요소 참조 / 2. 이전의 값을 기억 (컴포넌트 렌더링 영향 X)
// useCallback - 함수(기능) 타입 prop 참조 동일성 유지(기억, 성능 최적화)
// useMemo     - JavaScript 모든 값을 기억(성능 최적화)
// useId       - 고유한 식별자(ID) 생성

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
  useDocumentTitle('회원가입 → Likelion 4th');

  /* -------------------------------------------------------------------------- */

  const formStateRef = useRef(initialFormState);

  const handleReset = (e) => {
    e.preventDefault();
    console.log('reset');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    // 유효성 검사
    if (!name || name.trim().length < 2) {
      console.error('이름은 2글자 이상 입력해야 해요');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error('입력한 패스워드를 다시 확인하세요.');
      return;
    }

    console.log({ name, email, password, passwordConfirm });
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>

      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput name="name" label="이름" onChange={handleChangeInput} />

        <FormInput
          name="email"
          type="email"
          label="이메일"
          onChange={handleChangeInput}
        />

        <FormInput
          name="password"
          type="password"
          label="패스워드"
          onChange={handleChangeInput}
        />

        <FormInput
          name="passwordConfirm"
          type="password"
          label="패스워드 확인"
          onChange={handleChangeInput}
        />

        <div className={classes.group}>
          <Button type="submit">회원가입</Button>
          <Button secondary type="reset">
            초기화
          </Button>
        </div>
      </form>
    </BaseLayout>
  );
}
