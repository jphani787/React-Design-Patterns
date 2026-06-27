import { useState } from "react";
import "./App.css";
import AuthPanel from "./components/AuthPanel";
import MovieList from "./components/MovieList";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="flex flex-col items-center">
      <AuthPanel />
      <MovieList />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
