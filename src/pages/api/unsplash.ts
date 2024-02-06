import { ImageList } from "@/utilities/constants";

const API_CLIENT_KEY = process.env.NEXT_PUBLIC_API_CLIENTID;
const CLIENT_URL = `https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=${API_CLIENT_KEY}`;
const DEFAULT_PHOTOS_URL = `https://api.unsplash.com/photos?page=1&per_page=20&client_id=${API_CLIENT_KEY}`;

const searchApi = (imageSearch: string): Promise<ImageList> => {
  const url = `${CLIENT_URL}&query=${imageSearch}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.results);
};

const randomPhotosApi = (): Promise<ImageList> => {
  return fetch(DEFAULT_PHOTOS_URL).then((res) => res.json());
};

export { searchApi, randomPhotosApi };
