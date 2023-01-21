import { useFetch } from "./Fetch";

const url = "https://disease.sh/v3/covid-19";

const Api = () => {
  const data = useFetch(`${url}/countries`);
  return data;
};
export default Api;