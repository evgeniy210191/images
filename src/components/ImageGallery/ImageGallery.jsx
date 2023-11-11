import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            linkImage={webformatURL}
            image={webformatURL}
            alt={tags}
          />
        );
      })}
    </ImageGalleryList>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
