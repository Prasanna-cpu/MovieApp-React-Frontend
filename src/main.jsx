import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Routes,Route,BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path={"/*"} element={<App/>}></Route>
          </Routes>
      </Router>
  </React.StrictMode>,
)
