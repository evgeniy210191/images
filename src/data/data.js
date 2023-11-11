import axios from 'axios';
export const data = async (page, search) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=36116088-deee45cedc6b935fbf33378b4&lang=ru&image_type=photo&orientation=horizontal&q=${search}&page=${page}&safesearch=true&per_page=12`
  );
  return response.data;
};
