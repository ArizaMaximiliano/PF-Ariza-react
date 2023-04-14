import "./App.css"

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto="Esto es una prueba" />
    </>
  );
}

export default App;
