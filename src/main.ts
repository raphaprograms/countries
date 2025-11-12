import './style.css'
import { getAllCountries, toCountryCard } from './getAllCountries'
import { renderCards } from './renderCards';
import { filterCards, attachFilters } from './filterCountries';
import { setTheme } from './theme';

// For the Countries Project use the following endpoints:
// Get all countries: `https://restcountries.com/v3.1/all?fields=name,population,region,capital`
// All country details: `https://restcountries.com/v3.1/name/Lithuania?fullText=true`

// For filtering use: `https://restcountries.com/v3.1/region/asia`
// The value for name and region should be dynamic ^^^


document.addEventListener("DOMContentLoaded", async () => {
  setTheme();

  const grid = document.getElementById('grid')!;
  const userSearch = document.getElementById('search') as HTMLInputElement;
  const regionSelection = document.getElementById('region') as HTMLSelectElement;

  const raw = await getAllCountries();

  const allCards = raw.map(toCountryCard);

  let currentSearchValue = '';
  let currentAreaValue = '';
  
  const update = () => {
    const visible = filterCards(allCards, currentSearchValue, currentAreaValue);
    renderCards(grid, visible);
  }

  update();

  attachFilters(userSearch, regionSelection, (search, area) => {
    currentSearchValue = search;
    currentAreaValue = area;
    update();
  });

});