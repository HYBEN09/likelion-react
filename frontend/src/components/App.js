class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "React Application",
      isDisabled: false,
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: "New HeadLine💥",
      isDisabled: true,
    });
  }

  render() {
    const { headline, isDisabled } = this.state;

    return (
      <div data-component="App">
        <h1>{headline}</h1>
        <button
          type="button"
          onClick={this.handleChangeHeadline}
          disabled={isDisabled}
        >
          헤드라인 변경
        </button>
      </div>
    );
  }
}

export default App;
