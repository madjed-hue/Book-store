import React, { useState } from "react";
import "./App.css";
import Books from "./Components/Books";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import requests from "./requests";
import { Route, Routes } from "react-router-dom";
import BookDetail from "./Components/BookDetail";

export const theOption = React.createContext();
export const theSelectedOption = React.createContext();
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.new);

  return (
    <div className="app">
      <Header />
      <Heading />
      <theOption.Provider value={selectedOption}>
        <theSelectedOption.Provider value={setSelectedOption}>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/html" element={<Books />} />
            <Route path="/css" element={<Books />} />
            <Route path="/javascript" element={<Books />} />
            <Route path="/bootstrap" element={<Books />} />
            <Route path="/jquery" element={<Books />} />
            <Route path="/php" element={<Books />} />
            <Route path="/react" element={<Books />} />
            <Route path="/angular" element={<Books />} />
            <Route path="/vuejs" element={<Books />} />
            <Route path="/databases" element={<Books />} />
            <Route path="books/:id" element={<BookDetail />} />
          </Routes>
        </theSelectedOption.Provider>
      </theOption.Provider>
    </div>
  );
}

export default App;
