import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Beautiful image'}
          className={styles.modalImage}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
