import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "components/App/App.jsx";
import { theme } from "./components/Common/Theme.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

///////////////////
// Маршрутизация //
///////////////////
//
// Если приложение использует библиотеку react-router-dom для маршрутизации,
// необходимо дополнительно настроить компонент < BrowserRouter >,
// передав в пропе basename точное название твоего репозитория.
//
// <BrowserRouter basename="/_____repo_name______">
//   <App />
// </BrowserRouter>
//
///////////////////

ReactDOM.createRoot(document.getElementById("page-root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter baseName="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
