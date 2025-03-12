import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Component/DataProvider/DataProvider.jsx'
import {reducer, initialstate} from './Utility/reducer.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialstate={initialstate}>
      <App />
    </DataProvider>
  </StrictMode>
);
