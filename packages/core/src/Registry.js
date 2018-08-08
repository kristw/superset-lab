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

export function makeRegisterable(target) {
  target.registry = new Registry();
}
