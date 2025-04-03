import { Routes, Route } from "react-router";
import {
  Home,
  CharactersList,
  Episodes,
  Locations,
  CharacterDetail,
} from "./pages";
import { NavMenu } from "./components";

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </>
  );
}

export default App;
