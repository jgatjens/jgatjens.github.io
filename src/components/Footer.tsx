
import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
  text-decoration: none;
  text-transform: uppercase;
  color: #3B3E49;
  display: inline-block;
  width: 100%;
  text-align: center;

  .line {
    margin: 40px auto 20px auto;
    height: 1px;
    display: block;
    width: 150px;
    background-color: #E6E7E9;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #3B3E49;
    padding: 10px 0;
    display: block;
    font-weight: 800;
  }
    
`

export default () => (
  <Footer>
    <div className="line"></div>
    <a href="mailto:jgatjens@gmail.com">Hire me</a>
  </Footer>
)
