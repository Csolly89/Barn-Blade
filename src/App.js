import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from "./Pages/Hero";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/About" element={< />} /> */}
          {/* <Route path="/Blog" element={< />} /> */}
          {/* <Route path="/Products" element={< />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
