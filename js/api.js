import { getEnv } from "./utils.js";

const API_HOST = (() => {
  const env = getEnv();

  if (env === "development") {
    return "http://localhost:3000";
  }

  if (env === "production") {
    return "https://blog-api.pys99pys.com";
  }

  throw Error("Can not find api host");
})();

const apiCreator = api =>
  new Promise((resolve, reject) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener("load", function() {
      resolve(this.responseText);
    });
    httpRequest.addEventListener("error", function(e) {
      reject(e);
    });
    httpRequest.open("GET", API_HOST + api, true);
    httpRequest.send();
  });

const MOCK_DATA = [
  {
    id: 1,
    tags: "Diary,Javascript",
    subject: "첫번째 포스팅",
    content: "첫번째 포스팅입니다.",
    createdAt: "2019-02-22T12:30:30.555Z"
  },
  {
    id: 2,
    tags: "React",
    subject: "두번째 포스팅",
    content: "두번째 포스팅입니다.",
    createdAt: "2019-02-22T15:20:12.555Z"
  },
  {
    id: 3,
    tags: "Javascript,Server",
    subject: "세번째 포스팅",
    content: "세번째 포스팅입니다.",
    createdAt: "2019-02-25T12:10:15.555Z"
  }
];

export const getPost = async () => {
  try {
    const response = await apiCreator("/post");
    return JSON.parse(response);
  } catch (e) {
    console.log(e);
    return MOCK_DATA;
  }
};
