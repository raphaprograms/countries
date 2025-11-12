import type { CountryCard } from "./getAllCountries";

export function filterCards(cards: CountryCard[], userSearch: string, chosenRegion: string) {
    const search = userSearch.trim().toLowerCase();
    const region = chosenRegion.trim();

    return cards.filter(card => {
        const matchedName = search === '' || card.name.toLowerCase().includes(search);
        const matchedRegion = region === '' || card.region === region;
        return matchedName && matchedRegion;
    })
}

export function attachFilters(
    searchElement: HTMLInputElement, 
    regionElement: HTMLSelectElement, 
    onChange: (userSearch: string, chosenRegion: string) => void,
) {
    const show = () => onChange(searchElement.value, regionElement.value);

    searchElement.addEventListener('input', show);

    regionElement.addEventListener('change', show);

}