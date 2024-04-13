import css from "./SearchBar.module.css";
import { useId, useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          value={query}
          id="query"
          onChange={onChange}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
