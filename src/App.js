import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { State } from "./components/State";
import { getStatesAsync } from "./features/states/statesSlice";
import { getTimeStampAsync } from "./features/timeStamp/timeStampSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatesAsync());
    dispatch(getTimeStampAsync());
  }, []);
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/State" element={<State />}></Route>
      </Routes>
    </div>
  );
}

export default App;
