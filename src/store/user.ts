import { action, observable } from "mobx";

class User {
  @observable counter = 0
  @observable username = ''
  @action
  addCounter() {
    this.counter++
  }
  @action
  setUserName(playload) {
    this.username = playload
  }
}

export { User };
