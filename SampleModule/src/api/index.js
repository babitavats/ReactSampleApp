import axios from "axios";

const baseURL = "NorthwindSampleData/";

const instance = axios.create({
  baseURL
});

console.log(baseURL);
// console.log(instance);

// const cleanBaseURL = (url) => {
//   // Remove trailing '/index.html' if present
//   if (url.endsWith('/index.html')) {
//     return url.slice(0, -'/index.html'.length);
//   }
//   return url;
// };

export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/Customers", {
    params
  });

  return data.d?.results || data.d || data.value;
};

export const getTableData1 = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/Products", {
    params
  });
   console.log(data);
  return data.d?.results || data.d || data.value;
};

export const getTableCount = async () => {
  const { data } = await instance.get("/Customers/$count");
  return data;
};

export const getTableCount1 = async () => {
  const { data } = await instance.get("/Products/$count");
  return data;
};

