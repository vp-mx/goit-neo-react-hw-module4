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
        <div className={styles.imageInfo}>
          <h3>Photographer: {image.user.name}</h3>
          <p>❤️ {image.likes} likes</p>
          {image.description && <p>{image.description}</p>}
          <p>
            📐 {image.width} × {image.height}px
          </p>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕ Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
