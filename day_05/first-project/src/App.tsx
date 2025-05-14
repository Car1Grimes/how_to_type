import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { Link, Routes, Route } from "react-router-dom";
import { Home, About } from "./components";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider attribute="class">
      <Theme>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <QueryClientProvider client={queryClient}>
          <Example />
          <Example_02 />
        </QueryClientProvider>
      </Theme>
    </ThemeProvider>
  );
}

function Example_02() {
  const { isPending, error, data } = useQuery({
    queryKey: ["cats"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.artic.edu/api/v1/artworks/search?q=cats",
      );
      return res.json();
    },
  });
  if (isPending) {
    return "Loading...";
  }
  if (error) {
    return "Something wrong has happened";
  }
  return <div>{data.data[0].title}</div>;
}

function Example() {
  const result = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/Car1Grimes/how_to_type",
      );
      return await response.json();
    },
  });

  if (result.isPending) {
    return "Loading...";
  }

  if (result.isError) {
    return "Something wrong has occured";
  }

  return (
    <div>
      <h1>{result.data.full_name}</h1>
      <p>{result.data.description}</p>
      <strong>👀 {result.data.subscribers_count}</strong>{" "}
      <strong>✨ {result.data.stargazers_count}</strong>{" "}
      <strong>🍴 {result.data.forks_count}</strong>
      <div>{result.isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default App;
