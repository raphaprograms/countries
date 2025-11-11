export type RestCountryGrid = {
  name: { common: string ; official: string };
  flags:{ png?: string; svg?: string; alt?: string};
  population?: number;
  region: string[];
  capital: string;
  cca3?: string;
};

export type CountryCard = {
  name: string;
  flagsSrc: string;
  flagAlt: string;
  population: number;
  region: string;
  capital: string;
  code: string;
};

const API = 'https://restcountries.com/v3.1';
const gridFields = 'name,flags,population,region,capital,cca3'


export async function getAllCountries(): Promise<RestCountryGrid[]> {
  const res = await fetch(
    `${API}/all?fields=${gridFields}`,
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

export function toCountryCard(countryData: RestCountryGrid): CountryCard {
  return {
    name: countryData.name.common,
    flagsSrc: countryData.flags.png,
    flagAlt: countryData.flags.alt,
    population: countryData.population,
    region: countryData.region,
    capital: countryData.capital,
    code: countryData.cca3,

  };
}