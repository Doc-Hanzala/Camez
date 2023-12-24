import { useState } from "react";
import { useGlobalContext } from "../Context";

const SearchForm = () => {
  const [input, setInput] = useState();

  const { setSearch } = useGlobalContext();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hanzala");
    setSearch(input)
  }

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input
        className="input-control"
        type="text"
        placeholder="mountains"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="form-btn">
        search
      </button>
    </form>
  );
};

export default SearchForm;
