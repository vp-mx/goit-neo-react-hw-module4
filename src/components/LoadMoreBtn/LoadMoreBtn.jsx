import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      📸 Load More Images
    </button>
  );
};

export default LoadMoreBtn;
