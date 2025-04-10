import { Routes, Route } from "react-router";
import {
  Home,
  CharactersList,
  EpisodesList,
  LocationsList,
  CharacterDetail,
  EpisodeDetail,
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
        <Route path="/locations" element={<LocationsList />} />
        <Route path="/episodes" element={<EpisodesList />} />
        <Route path="/episodes/:id" element={<EpisodeDetail />} />
      </Routes>
    </>
  );
}

export default App;
