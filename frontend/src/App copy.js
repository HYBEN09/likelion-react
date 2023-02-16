import Browse from "./pages/Browse.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import { likeLionMembers } from "./data/likeLionMembers.js";

class App extends React.Component {
  state = {
    headline: "React Application",
    // isDisabled: false,
    isToggle: false,
    isLoading: !true,
    isPaid: false,
    hasError: null, // { message: '서버에서 적절하지 않은 요청이 있었다는 응답이 있었습니다.' },
    likeLionMembers,
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = "NEW HEADLINE! 😃";

  //*-----------------------------------------------------------------------------
  //? 화살표 함수를 쓴 이유 : this가 class field를 가리켜야 하니까
  handleChangeHeadline = () => {
    const { hasError: error } = this.state;

    //* 1. 문
    // if (error === null || error === undefined) {
    //   console.log("현재 앱에는 오류(error)가 발생하지 않았습니다.");
    // }

    //* 2. 터너리
    // error === null || error === undefined
    //   ? console.log("현재 앱에는 오류(error)가 발생하지 않았습니다.")
    //   : null;

    //* 3. null 병합 연산자
    // error ?? console.log("현재 앱에는 오류(error)가 발생하지 않았습니다.");

    //* 옵셔널 체이닝을 사용해 조건 처리해봅니다.
    // error && typeof error.log === "function" && error.log();

    // let error = {
    //   log() {
    //     console.log("this is logger");
    //   },
    // };

    // error.log?.();

    //*-----------------------------------------------------------------------------

    // 조건 처리
    // 문을 사용할 것인가?
    if (this.state.isToggle) {
      this.setState({
        isToggle: false,
        headline: this.originalHeadline,
        hasError: null,
      });
    } else {
      this.setState({
        isToggle: true,
        headline: this.willUpdateHeadline,
      });
    }

    // 아니면 식을 사용할 것인가?
    // this.setState({
    //   headline: "New HeadLine💥",
    //   isDisabled: true,
    // });
  };

  render() {
    const { isToggle, headline, isLoading, hasError, isPaid, likeLionMembers } =
      this.state;

    if (isLoading) {
      return <div role="alert">데이터 로딩 중...</div>;
    }

    if (hasError) {
      return <div role="alert"> {hasError.message}</div>;
    }

    return <Home />;

    return (
      <div className="App">
        <h1>{headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          {isToggle ? "오리지널 헤드라인으로 변경" : "뉴 헤드라인으로 변경"}
        </button>

        <LogIn />

        {isPaid && <Browse />}
      </div>
    );
  }
}

export default App;
