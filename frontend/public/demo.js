/* React 컴포넌트 --------------------------------------------------------------- */

//* 함수(형) 컴포넌트
function Group(props) {
  //? React.createElement()에 props를 전달할 경우 꼭 객체일 필요는 없다.
  //? React 컴포넌트가 전달받는 props는 반드시 객체이다.

  console.log(props); //object
  console.log(props.lang);
  console.log(props.content);

  //? JSX 보간법(interpolation)
  // <element prop={value}>this is {content}</element>

  return (
    <div role="group" lang={props.lang}>
      {props.content}
    </div>
  );
}

//* 클래스 컴포넌트
class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  // 렌더링
  render() {
    console.log(this.props);

    // 구조 분해 할당
    const { path, label } = this.props;

    // React 엘리먼트 반환
    return <img src={path} alt={label} />;
  }
}

/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(
  <React.Fragment>
    <Logo path="/assets/react-logo.svg" label="React" />
    <Group />
    <Logo
      path="https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg"
      label="Next.js"
      unknown="아무 것도 몰라요~"
    />
    <Group lang="ru" content="Далеко-далеко за словесными горами." />
  </React.Fragment>
);

//*-----------------------------------------------------------------------

// reactDomRoot.render([
//?   with JSX
//   <div role="group" lang="ko" key="with-jsx">
//     <Logo /> 리엑트
//   </div>,

//?   without JSX
//   React.createElement(
//     "div",
//     { role: "group", lang: "en", key: "without-jsx" },
//     React.createElement(Logo),
//     "React"
//   ),
// ]);
