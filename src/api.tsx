import { Dog } from './types';

const Dog_api = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5';

export const fetchDogs = async (): Promise<Dog[]> => {
  const response = await fetch(Dog_api);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Dog[] = await response.json();
  return data;
};
