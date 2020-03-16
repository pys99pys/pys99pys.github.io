export default class Renderer {
  constructor(store) {
    this.renderLayout();
    this.store = store;
  }

  renderLayout() {
    document.getElementById("root").innerHTML = `
      <header class="header">
        <span class="header__logo"><a href="/#/post">ys.log</a></span>
        <nav class="header__nav">
          <ul>
            <li>
              <a href="/#/about">About</a>
            </li>
            <li>
              <a href="/#/post">Post</a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main"></main>
      <footer class="footer">pys99pys's tech blog</footer>
    `;
  }

  async renderPage(component) {
    const $main = document.getElementsByClassName("main")[0];
    const render = await component(this.store);
    $main.innerHTML = render;
  }

  setNavActive(path) {
    const $header = document.getElementsByClassName("header")[0];
    [].forEach.call($header.querySelectorAll("nav a"), $el => {
      $el.classList.remove("active");
      const [, href] = $el.getAttribute("href").split("/#");
      if (path.includes(href)) {
        $el.classList.add("active");
      }
    });
  }

  move(path, component) {
    this.setNavActive(path);
    this.renderPage(component);
  }
}
