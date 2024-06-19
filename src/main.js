import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api';
import { renderGallery, appendToGallery, showMessage, showLoader, hideLoader } from './js/render-functions';

let currentPage = 1;
let currentQuery = '';

document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const queryInput = event.target.elements.query;
    currentQuery = queryInput.value.trim();
    currentPage = 1;

    if (!currentQuery) {
        showMessage('Please enter a search query.');
        return;
    }

    showLoader();
    const images = await fetchImages(currentQuery, currentPage);
    hideLoader();

    if (images.length === 0) {
        showMessage('Sorry, there are no images matching your search query. Please try again!');
    } else {
        renderGallery(images);
        document.querySelector('#load-more').classList.remove('hidden');
    }

    queryInput.value = '';
});

document.querySelector('#load-more').addEventListener('click', async () => {
    currentPage += 1;

    showLoader();
    const images = await fetchImages(currentQuery, currentPage);
    hideLoader();

    if (images.length === 0) {
        showMessage('No more images found.');
        document.querySelector('#load-more').classList.add('hidden');
    } else {
        appendToGallery(images);
    }
});