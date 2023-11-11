import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { data } from 'data/data';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isAlreadyLoad, setIsAlreadyLoad] = useState(false);
  const [requestsItem, setRequestsItem] = useState('');
  const [isItem, setIsItem] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsAlreadyLoad(false);

    async function updataPge() {
      if (requestsItem === '') return;
      try {
        setIsAlreadyLoad(true);
        setIsItem(false);
        const searchedData = await data(page, requestsItem);
        setTotal(searchedData.total);

        if (page !== 1) {
          setImages(prevState => [...prevState, ...searchedData.hits]);
          setIsAlreadyLoad(false);
          return;
        }

        setImages(searchedData.hits);
        setIsAlreadyLoad(false);
        setIsItem(searchedData.total !== searchedData.hits.length);
      } catch (error) {
        console.log(error.request.status);
      }
    }
    updataPge();
  }, [requestsItem, page]);

  useEffect(() => {
    setIsItem(total !== images.length);
  }, [images, total]);

  const onSubmit = message => {
    if (message.trim() === requestsItem || message.trim() === '') {
      return;
    }
    setImages([]);
    setPage(1);
    setRequestsItem(message);
    setIsAlreadyLoad(false);
    setIsItem(false);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      {images.length !== 0 && <ImageGallery images={images} />}
      {isItem && <Button loadMore={loadMore} />}
      <Loader isAlreadyLoad={isAlreadyLoad} />
    </Container>
  );
}

export default App;
