import './App.css';
import { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { fetchPhotos } from './unsplash-api';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      setLoading(true);
      setError(null);

      try {
        const { results, total_pages } = await fetchPhotos(query, page);
        setImages(prevImages =>
          page === 1 ? results : [...prevImages, ...results]
        );
        setTotalPages(total_pages);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to load images. Try again later.');
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  const handleSearch = useCallback(newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }, []);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const openModal = useCallback(image => {
    setModalImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
