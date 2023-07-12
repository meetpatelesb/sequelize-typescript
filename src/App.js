import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Table from "./pages/Table";
import Table2 from "./pages/Table2";
import Table3 from "./pages/Table3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Table />}></Route>
          <Route exact path="/2" element={<Table2 />}></Route>
          <Route exact path="/3" element={<Table3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
