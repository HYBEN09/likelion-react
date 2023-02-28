import { useFetch } from '../hooks/useFetch';

export function usePhotos({ limit = 20, page = 1 } = {}) {
  return useFetch(
    `${import.meta.env.VITE_PHOTOS_API}?_page=${page}&_limit=${limit}`
  );
}
