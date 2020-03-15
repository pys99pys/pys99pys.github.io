import routes from "./routes.js";

export default class Router {
  constructor(renderer) {
    this.renderer = renderer;
  }

  push() {
    const [, currentPath] = window.location.href.split("#");
    const path = Object.keys(routes).find(key => key === currentPath);
    this.renderer.move(path, routes[path]);
  }
}
