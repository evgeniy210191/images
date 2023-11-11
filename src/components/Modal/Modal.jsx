import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
import { useEffect } from 'react';

function Modal({ children, closeModal }) {
  useEffect(() => {
    const closeModalKey = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeModalKey);
    return () => window.removeEventListener('keydown', closeModalKey);
  }, [closeModal]);

  const modal = document.querySelector('#modal-root');

  function closeModalClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  return createPortal(
    <Overlay onClick={closeModalClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modal
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
