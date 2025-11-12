import type { CountryDetail } from "./getSingleCountry";

export function renderDetail(
    container: HTMLElement,
    detail: CountryDetail,
    borders: { code: string; name: string }[],
) {
    container.textContent = '';

    const main = document.createElement('div');
    main.classList.add('country-detail');

    const img = document.createElement('img');
        img.classList.add('flag-details');
        img.src = detail.flagSrc;
        img.alt = detail.flagAlt;
    main.appendChild(img);

    const data = document.createElement('div');
        data.classList.add('data');

    const countryHeading = document.createElement('h2');
        countryHeading.textContent = detail.name;
    data.appendChild(countryHeading);

    const facts = document.createElement('ul');
        facts.classList.add('facts');

    const createFactLi = (label: string, value: string | undefined | null) => {
        const li = document.createElement('li');
        const bold = document.createElement('strong');
        bold.textContent = `${label}: `;
        li.appendChild(bold);
        li.append(value ?? '-');
        return li;
    };

    facts.appendChild(createFactLi('Native Name', detail.nativeName));
    facts.appendChild(createFactLi('Population', detail.population?.toLocaleString() ?? undefined));
    facts.appendChild(createFactLi('Region', detail.region));
    facts.appendChild(createFactLi('Sub Region', detail.subregion));
    facts.appendChild(createFactLi('Capital', detail.capital));
    facts.appendChild(createFactLi('Top Level Domain', detail.tld.join(', ') || undefined));
    facts.appendChild(createFactLi('Currencies', detail.currencies.join(', ') || undefined));
    facts.appendChild(createFactLi('Languages', detail.languages.join(', ') || undefined));

    data.appendChild(facts);

    const bordersDiv = document.createElement('div');
        bordersDiv.classList.add('borders');

        const bordersBold = document.createElement('strong');
            bordersBold.textContent = 'Border Countries:';

        bordersDiv.appendChild(bordersBold);

        const bordersList = document.createElement('span');
            bordersList.classList.add('border-list');

            if (borders.length) {
                borders.forEach(borderCountry => {
                    const borderLink = document.createElement('a');
                        borderLink.classList.add('b-link');
                        borderLink.href = `details.html?name=${borderCountry.name}`;
                        borderLink.textContent = borderCountry.name;
                    bordersList.appendChild(borderLink);
                });
            } else {
                bordersList.textContent = 'none';
            }
    bordersDiv.appendChild(bordersList);
    data.appendChild(bordersDiv);

    main.appendChild(data);

    container.appendChild(main);

}