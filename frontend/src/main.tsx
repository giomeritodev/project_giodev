import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={3000}/>
  </React.StrictMode>,
);
