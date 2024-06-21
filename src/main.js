import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api';
import { renderGallery, showLoader, hideLoader } from './js/render-functions';

let currentQuery = '';

document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const queryInput = event.target.elements.query;
    currentQuery = queryInput.value.trim();

    if (!currentQuery) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: 'topRight',
        });
        return;
    }

    showLoader();
    try {
        const images = await fetchImages(currentQuery);
        if (images.length === 0) {
            iziToast.info({
                title: 'Info',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            renderGallery([]);
        } else {
            renderGallery(images);
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }

    queryInput.value = '';
});