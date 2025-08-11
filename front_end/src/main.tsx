import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import{ BrowserRouter } from 'react-router-dom'
// import config from "./Config/general_config";
// Make it globally available
// (window as any).config = config;
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
// Update the path below to the correct relative path if needed
import axios from './utils/axiosInstance';


axios.defaults.withCredentials = true;  // 🔑 Send cookies with requests
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
        <App />
        </Provider>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
