import "./App.css";
import { Component } from "react";
import Timer from "./components/Timer";
import img from "./img.jpg";

class App extends Component {
  state = {
    person: {
      imgSrc: img,
      fullname: "Abidi Mohamed",
      profession: "Fullsatck Developer",
      bio: "Recent computer science graduate with a passion for developing scalable web applications and working across the full stack. I am looking to join forces with Red Technologies to continue to grow my skill set while contributing to the positive outcome of making people richer smarter and happier.",
    },
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>

        <button className="btn_primary" onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isVisible && (
          <Timer
            imgSrc={this.state.person.imgSrc}
            fullname={this.state.person.fullname}
            profession={this.state.person.profession}
            bio={this.state.person.bio}
          />
        )}
      </div>
    );
  }
}

export default App;
