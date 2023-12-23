import Gallery from "./components/Gallery";
import Name from "./components/Name";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Name />
      <SearchForm />
      <Gallery/>
    </>
  );
}

export default App;
