import "./App.css";

// Components
import Grid from "./components/Grid";
import List from "./components/List";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section className="container mx-auto px-5 lg:px-32">
      <Navbar />
      <Grid />
      <List />
    </section>
  );
};

export default App;
