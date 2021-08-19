import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { createGlobalStyle } from 'styled-components'
import { Router } from '@reach/router'
import styledNormalize from 'styled-normalize'
import Dynamic from 'containers/Dynamic'

// import FancyDiv from 'components/FancyDiv'
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

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
`

function App() {
  return (
    <Root>
      <GlobalStyle />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content"> */}
        {/* <FancyDiv> */}
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        {/* </FancyDiv> */}
      {/* </div> */}
    </Root>
  )
}

export default App
