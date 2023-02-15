class App extends React.Component {
  state = {
    headline: "React Application",
    // isDisabled: false,
    isToggle: false,
    isLoading: !true,
    hasError: null, // { message: '서버에서 적절하지 않은 요청이 있었다는 응답이 있었습니다.' },
  };

  originalHeadline = this.state.headline;
  willUpdateHeadline = "NEW HEADLINE! 😃";

  // 화살표 함수를 쓴 이유 : this가 class field를 가리켜야 하니까
  handleChangeHeadline = () => {
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

    // this.setState({
    //   headline: "New HeadLine💥",
    //   isDisabled: true,
    // });
  };

  render() {
    const { isToggle, headline, isLoading, hasError } = this.state;

    if (isLoading) {
      return <div role="alert">데이터 로딩 중...</div>;
    }

    if (hasError) {
      return <div role="alert"> {hasError.message}</div>;
    }

    return (
      <div data-component="App">
        <h1>{headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          {isToggle ? "오리지널 헤드라인 으로 변경" : "뉴 헤드라인 으로 변경"}
        </button>
      </div>
    );
  }
}

export default App;
