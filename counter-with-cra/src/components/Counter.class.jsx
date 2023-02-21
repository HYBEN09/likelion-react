import { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    count: 1,
    min: 1,
    max: 10,
    step: 1,
  };

  state = {
    count: this.props.count,
  };

  render() {
    const { count } = this.state;

    // console.log(this.props); //{count: 1, min: 1, max: 10, step: 1}

    return (
      <div data-component="Counter">
        <button
          type="button"
          aria-label="카운트 1 증가"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <output>{count}</output>
        <button
          type="button"
          aria-label="카운트 1 감소"
          onClick={this.handleDecrement}
        >
          -
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + this.props.step,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.props.step,
    });
  };
}

export default Counter;
