"use strict";

import Renderer from "./js/renderer.js";
import Router from "./js/router.js";
import { getPost } from "./js/api.js";

(async () => {
  if (!window.location.href.split("/").pop()) {
    window.location.href = "/#/post";
    return;
  }

  const renderer = new Renderer();
  const router = new Router(renderer);

  try {
    const postItems = await getPost();
    const tags = postItems.reduce((obj, { tags }) => {
      const tagArr = tags.split(",");
      tagArr.forEach(tag => {
        if (!!obj[tag]) {
          obj[tag] += 1;
        } else {
          obj[tag] = 1;
        }
      });
      return obj;
    }, {});

    window.postItems = postItems;
    window.tags = tags;
  } catch (e) {
    throw Error("Fail to load post list");
  }

  router.push();
  window.addEventListener("hashchange", () => {
    router.push();
  });
})();
