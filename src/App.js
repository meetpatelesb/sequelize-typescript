import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Table from "./pages/Table";
import Table2 from "./pages/Table2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Table />}></Route>
          <Route exact path="/2" element={<Table2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
