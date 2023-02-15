class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "React Application",
    };
    // this가 undefined로 출력되는 문제 해결
    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: "New HeadLine💥",
    });
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        <button type="button" onClick={this.handleChangeHeadline}>
          헤드라인 변경
        </button>
      </div>
    );
  }
}

/* -------------------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

reactDomRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
