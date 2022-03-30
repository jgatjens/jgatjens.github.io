import React from "react";
import { Root, Routes } from "react-static";
import { createGlobalStyle } from "styled-components";
import { Router } from "@reach/router";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  body, html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root, 
  #root > div, 
  #root > div > div {
    height: 100%;
  }
`;

function App() {
  return (
    <Root>
      <GlobalStyle />
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
