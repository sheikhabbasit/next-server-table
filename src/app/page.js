import { redirect } from "next/navigation";
export const metadata = {
  title: "Next Data App",
  description: "Powered by JSON Server",
};

async function Home() {
  redirect("/home");
}

export default Home;
