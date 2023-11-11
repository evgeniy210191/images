import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import { useState } from 'react';

function ImageGalleryItem({ image, alt, linkImage }) {
  const [openModal, setOpenModal] = useState(false);
  const [linkLargeImage, setLinkLargeImage] = useState('');

  const closeModal = () => {
    setLinkLargeImage('');
    setOpenModal(prevState => !prevState);
  };
  const upScaleImage = () => {
    setLinkLargeImage(linkImage);
    setOpenModal(true);
  };
  return (
    <GalleryItem>
      {openModal && (
        <Modal closeModal={closeModal}>
          <img src={linkLargeImage} alt={alt} />
        </Modal>
      )}
      <Image src={image} alt={alt} onClick={upScaleImage} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  linkImage: PropTypes.string.isRequired,
};
