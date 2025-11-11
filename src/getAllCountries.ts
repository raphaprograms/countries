

export default async function () {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital",
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  console.log(data);
};