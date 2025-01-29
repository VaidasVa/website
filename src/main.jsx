import { createRoot } from 'react-dom/client'
import '/public/style/global.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import './i18n';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
