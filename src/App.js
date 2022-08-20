import React from "react";
import {
  Routes,
  Route
} from 'react-router-dom';

import { Auth, Home } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="*" element={<Auth/>} />
        <Route path="/im" element={<Home/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
