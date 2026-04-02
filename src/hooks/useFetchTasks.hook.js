import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

const fetchTasks = async ({ queryKey }) => {
  const [_key, { limit = 5, page = 1, order = "asc" }] = queryKey;
  const token = Cookies.get("token");
  const url = new URL(`${import.meta.env.VITE_API_URL}tasks`);
  url.searchParams.append("limit", limit);
  url.searchParams.append("page", page);
  url.searchParams.append("order", order);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export function useFetchTasks(params = {}) {
  return useQuery({
    queryKey: ["fetchTasks", params],
    queryFn: fetchTasks,
    onSuccess: (response) => {
      console.log("Tasks fetched successfully:", response);
    },
    onError: (error) => {
      console.error("Error fetching tasks:", error);
    },
  });
}
