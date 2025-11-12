import type { CountryCard } from "./getAllCountries";

export function renderCards(gridEl: HTMLElement, cards: CountryCard[]) {

    gridEl.textContent ='';

  
    for (const card of cards) {
        
        const link = document.createElement('a');
            link.className = 'card';
            link.href = `details.html?name=${card.name}`;

            const img = document.createElement('img');
                img.className = 'flag';
                img.src = card.flagsSrc;
                img.alt = card.flagAlt;
            

            const body = document.createElement('div');
                body.className = 'card-body';

                const nameElement = document.createElement('h2');
                    nameElement.className = 'name';
                    nameElement.textContent = card.name;
                body.appendChild(nameElement);

                const populationElement = document.createElement('p');
                    populationElement.className = 'population';
                    populationElement.textContent = `Population: ${card.population}`;
                body.appendChild(populationElement);

                const regionElement = document.createElement('p');
                    regionElement.className = 'region';
                    regionElement.textContent =`Region: ${card.region ?? 'not found'}`;
                body.appendChild(regionElement);

                const capitalElement = document.createElement('p');
                    capitalElement.className = 'capital';
                    capitalElement.textContent = `Capital: ${card.capital ?? 'not found'}`;
                body.appendChild(capitalElement);


            link.appendChild(img);   
            link.appendChild(body);
            
        gridEl.appendChild(link);
    }

}