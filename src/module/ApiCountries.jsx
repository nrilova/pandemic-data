import { useFetch } from "./Fetch";

export const Url = "https://disease.sh/v3/covid-19";

const Api = () => {
  const data = useFetch(`${Url}/countries`);
  return data;
};

export default Api;