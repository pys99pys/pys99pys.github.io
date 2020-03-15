export const getEnv = () => {
  return window.location.href.indexOf("http://") === 0
    ? "development"
    : "production";
};

export const map = (arr, func) => arr.map(item => func(item)).join("");

export const timeFormat = timeString => {
  const [year, month, day] = timeString.split("T")[0].split("-");
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
};
