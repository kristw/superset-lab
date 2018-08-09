export default class Registry {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  get(key) {
    return this.items[key];
  }
}
