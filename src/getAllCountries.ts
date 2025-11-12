export type RestCountryGrid = {
  name: { common: string ; official: string };
  flags:{ png?: string; svg?: string; alt?: string};
  population?: number;
  region?: string;
  capital?: string[];
  cca3?: string;
};

export type CountryCard = {
  name: string;
  flagsSrc: string;
  flagAlt: string;
  population: number | null;
  region: string | null;
  capital: string | null;
  code: string | null;
};

const API = 'https://restcountries.com/v3.1';
const gridFields = 'name,flags,population,region,capital,cca3'


export async function getAllCountries(): Promise<RestCountryGrid[]> {
  const res = await fetch(`${API}/all?fields=${gridFields}`,);

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  // const data = await res.json();
  // console.log(data);
  return res.json();
};

export function toCountryCard(countryData: RestCountryGrid): CountryCard {
  return {
    name: countryData.name?.common ?? 'No known country',
    flagsSrc: countryData.flags?.png ?? countryData.flags?.svg ?? '',
    flagAlt: countryData.flags.alt ?? `${countryData.name?.common ?? 'Country'} flag`,
    population: countryData.population ?? null,
    region: countryData.region ?? null,
    capital: countryData.capital?.[0] ?? null,
    code: countryData.cca3 ?? null,

  };
}