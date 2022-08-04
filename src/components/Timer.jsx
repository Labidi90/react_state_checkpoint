import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    console.log("run constructor");
  }

  componentDidMount = () => {
    console.log("run componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  componentDidUpdate = () => {
    console.log("run componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("run componentWillUnmount");
    clearInterval(this.intervalId);
  };

  render() {
    console.log("run render");
    return (
      <div className="blog_post">
        <img src={this.props.imgSrc} alt="profile picture" />
        <h2>Full Name :</h2>
        <p>{this.props.fullname}</p>
        <h2>Profession :</h2>
        <p>{this.props.profession}</p>
        <h2>Bio :</h2>

        <p className="box">{this.props.bio}</p>

        <h1>{this.state.timer}</h1>
      </div>
    );
  }
}

export default Timer;
