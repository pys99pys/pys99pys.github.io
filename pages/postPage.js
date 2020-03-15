import { getPost } from "../js/api.js";
import { map, timeFormat } from "../js/utils.js";

const postPage = async () => {
  const { postItems, tags } = window;
  const [, currentTag] = window.location.href.split("post#");
  const items = !!currentTag
    ? postItems.filter(
        ({ tags }) => tags.toLowerCase().indexOf(currentTag) !== -1
      )
    : postItems;

  const path = "/#/post";
  const detailPath = "/#/post-detail";

  return `
    <div class="content">
      <div class="post-page">
        <div class="post-page__items">
          ${map(
            items,
            ({ id, tags, subject, content, createdAt }) => `
              <article>
                <a href="${detailPath}#${id}">
                  <div class="labels">
                    ${map(
                      tags.split(","),
                      tag => `
                        <span>${tag}</span>
                      `
                    )}
                  </div>
                  <h1>${subject}</h1>
                  <p>${content}</p>
                  <time>${timeFormat(createdAt)}</time>
                </a>
              </article>
            `
          )}
        </div>
        <aside class="post-page__aside">
          <ul>
            <li>
              <a
                href="${path}"
                class="${!!currentTag ? "" : "active"}"
              >
                All
                <span>${postItems.length}</span>
              </a>
            </li>
            ${map(
              Object.keys(tags),
              tag => `
                <li>
                  <a
                    href="${path}#${tag.toLowerCase()}"
                    class="${currentTag === tag.toLowerCase() ? "active" : ""}"
                  >
                    ${tag}
                    <span>${tags[tag]}</span>
                  </a>
                </li>
              `
            )}
          </ul>
        </aside>
      </div>
    </div>
  `;
};

export default postPage;
