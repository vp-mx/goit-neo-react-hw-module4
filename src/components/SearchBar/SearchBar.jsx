import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

const showEmptySearchError = () => {
  toast.error('Please enter a search term');
};

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (!values.search.trim()) {
      showEmptySearchError();
      return;
    }
    onSubmit(values.search);
    actions.resetForm();
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" />
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form className={styles.searchForm}>
          <Field
            className={styles.searchField}
            type="text"
            name="search"
            placeholder="Find beautiful images..."
            autoComplete="off"
            autoFocus
          />
          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
