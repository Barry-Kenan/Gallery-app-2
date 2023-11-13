import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const instanceApi = axios.create({
	baseURL: API_URL
});

export const galleryApi = {
	getImages() {
		return instanceApi.get('catalog.json').then(res => res.data);
	}
};
