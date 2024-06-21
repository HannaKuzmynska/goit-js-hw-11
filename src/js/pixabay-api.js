const API_KEY = '44418472-b0d967fab2ad788a724b3e426';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
