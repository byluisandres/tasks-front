import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

// Redux
import { Provider } from "react-redux";
import store from "./modules/store";

// Pages
import Index from "./pages/Tasks/Index";
import Create from "./pages/Tasks/Create";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-gray-300 ">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
