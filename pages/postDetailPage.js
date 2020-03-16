import { map, timeFormat } from "../js/utils.js";

const postDetailPage = async store => {
  const { posts } = store;
  const [, id] = window.location.href.split("post-detail#");
  const item = posts.find(({ id: targetId }) => targetId === Number(id));

  if (!item) {
    return "";
  }

  const { tags, subject, content, createdAt } = item;

  return `
    <div class="content">
      <div class="post-detail-page">
        <div class="post-detail-page__header">
          <div class="labels">
            ${map(
              tags.split(","),
              tag => `
                <span>${tag}</span>
              `
            )}
          </div>
          <h1>${subject}</h1>
          <time>${timeFormat(createdAt)}</time>
        </div>
        <div class="post-detail-page__content">${marked(content)}</div>
      </div>
    </div>
  `;
};

export default postDetailPage;
