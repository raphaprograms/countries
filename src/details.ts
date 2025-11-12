import { setTheme } from "./theme";
import './style.css';
import { getCountrybyName, toCountryDetail, getCountryNamebyCodes } from "./getSingleCountry";
import { renderDetail } from "./renderSingleCountry";

document.addEventListener('DOMContentLoaded', async () => {
    setTheme();

    const detailElement = document.getElementById('detail')!;
    const backButton = document.getElementById('back');
    backButton?.addEventListener('click', () =>{
        window.location.href = 'index.html';
    });

    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    if (!name) return;

    const raw = await getCountrybyName(name);
    const viewModel = toCountryDetail(raw);
    const borders = await getCountryNamebyCodes(viewModel.borders);

    renderDetail(detailElement, viewModel, borders);
});