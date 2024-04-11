import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const searchSchema = Yup.object().shape({
    query: Yup.string().required("Search query is required"),
  });
  return (
    <Formik
      className={css.form}
      initialValues={{ query: "" }}
      validationSchema={searchSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.query);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="query" className={css.input} />
          <button type="submit" disabled={isSubmitting} className={css.btn}>
            Search
          </button>
          <ErrorMessage name="query" component="div" className={css.error} />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
