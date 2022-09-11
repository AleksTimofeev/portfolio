import React from 'react';
import Header from "./Components/Header/Header";
import Main from './Components/Main/Main';
import Footer from "./Components/Footer/Footer";
import {HashRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={
            <>
              {/*<Header/>*/}
              <Main/>
              <Footer/>
            </>
          } />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
