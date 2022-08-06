export const fetch_data = (url) => fetch(url).then((res) => res.json());
export const validate_data = (data) => {
  return data !== undefined && data !== null ? data : "";
};
export const strToArr = () => {
  Object.entries(JSON.parse(localStorage.getItem("fCode"))).map((data) => {
    return data[1];
  });
};
