import { observable, action, computed } from "mobx";

class BirdStore {
  //This is a global state
  @observable birds = [];

  //This is a global function to add bird in the global state
  @action addBird = bird => {
    this.birds.push(bird);
  };

  //This is getter so you don't need parenthesis in calling this
  @computed get birdCount() {
    return this.birds.length;
  }
}

//We initialize the BirdStore here before exporting so no need to re-initialize it anywhere
const store = new BirdStore();

export default store;
