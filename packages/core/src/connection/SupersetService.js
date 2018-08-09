export default class SupersetClient {
  get() {

  }

  post() {

  }

  put() {

  }

  destroy() {

  }
}

let client;

SupersetClient.getInstance = function() {
  if (!client) {
    client = new SupersetClient();
  }
  return client;
}

export function configure(config) {
  client = new SupersetClient(config);
}
