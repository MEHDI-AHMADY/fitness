export const exerciseOptions :RequestInit = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options :RequestInit) => {
  const res = await fetch(url, options);
  const exercises = await res.json();
  return exercises;
};
