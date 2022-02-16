import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="navbar"></div>

        <div className="main"></div>

        <div className="footer"></div>
      </div>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
