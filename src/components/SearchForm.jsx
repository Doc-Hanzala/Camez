const SearchForm = () => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hanzala");
  }

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input className="input-control" type="text" placeholder="mountains" />
      <button type="submit" className="form-btn">
        search
      </button>
    </form>
  );
};

export default SearchForm;
