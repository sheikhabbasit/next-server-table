import { apiService } from "local/apiService/apiService";
import HomeClient from "../components/HomeClient";

export const metadata = {
  title: "Next Data App",
  description: "Powered by JSON Server",
};

async function Home({ searchParams }) {
  const page = searchParams?.page || 1;
  const limit = searchParams?.perPage || 10;
  const perPage = searchParams?.perPage || 10;
  const sort = searchParams?.sort || "name";
  const searchQuery = searchParams?.name || "";
  const paramsData = { page, limit, perPage, sort, searchQuery };

  let url = `http://localhost:3001/data?_per_page=${limit}&_page=${page}&_sort=${sort}&_start=${
    (page - 1) * perPage
  }&_end=${page * perPage}`;

  if (searchQuery.length > 0) {
    url = `http://localhost:3001/data?&name=${searchQuery}`;
  }

  let data = await apiService.get(url);

  return <HomeClient data={data} params={paramsData} />;
}

export default Home;
