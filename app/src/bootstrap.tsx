import './style/style.scss'
import React from "react";
import { createRoot } from 'react-dom/client';
import Main from "./Main.jsx";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);