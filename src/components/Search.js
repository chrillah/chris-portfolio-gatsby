import React, { useState } from "react";
import { Index } from "elasticlunr";
import { Link } from "gatsby";

// Search component
const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const getOrCreateIndex = () =>
    Index.load(searchIndex);

  const search = (evt) => {
    const query = evt.target.value;
    const index = getOrCreateIndex();
    setQuery(query);
    
    // Query the index with the search string to get an array of IDs
    const searchResults = index
      .search(query, {})
      // Map over each ID and return the full document
      .map(({ ref }) => index.documentStore.getDoc(ref));

    setResults(searchResults);
  };

  return (
    <div>
      <input type="text" value={query} onChange={search} />
      <ul>
        {results.map((page) => (
          <li key={page.id}>
            <Link to={"/" + page.path}>{page.title}</Link>
            {": " + page.tags.join(`,`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
