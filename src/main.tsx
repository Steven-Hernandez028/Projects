import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//primary #FF4C01
//Secondary font #9FA19F
//primary font
const theme = extendTheme({
  colors: {
    font: {
      100: "#ffffff",
      200: "#9FA19F",
    },
    primary: {
      100: "#FF4C01",
    },
  },
  fonts: {
    font: `Jost, sans-serif`,
  }

});

//Color for gray filter #393939

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
