import React, { Component } from "react";
import { inject, observer } from "mobx-react";

//This will inject our BirdStore Storage here
@inject("BirdStore")
//This is to reload when we make changes into the store
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = "";
  };

  render() {
    const { BirdStore } = this.props;

    return (
      <div className="App">
        <h2>You have {BirdStore.birdCount} birds.</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter bird"
            //This is to get value not using state
            ref={input => (this.bird = input)}
          />
          <button>Add Bird</button>
        </form>

        <ul>
          {BirdStore.birds.map((bird, i) => (
            <li key={i}>{bird}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
