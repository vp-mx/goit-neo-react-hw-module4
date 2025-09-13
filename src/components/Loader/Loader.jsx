import styles from './Loader.module.css';
import CircleLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircleLoader color="#0066a0" />
    </div>
  );
};

export default Loader;
