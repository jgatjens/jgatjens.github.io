import React from 'react'
import styled from 'styled-components'

import srcImage from '../assets/bg-website.jpg'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    max-width: 1053px;
  }
`

const FigureLines =  styled.div`
    position: absolute;
    top: 30%;
    left: -3px;

    span {
        height: 4px;
        background-color: #020218;
        border-radius: 6px;
        display: block;
        margin-bottom: 3px;
    }

    span:nth-child(1) { width: 60px; }
    span:nth-child(2) { width: 80px; }
    span:nth-child(3) { width: 40px; }

`

export default () => (
  <Background>
      <FigureLines>
          <span></span>
          <span></span>
          <span></span>
      </FigureLines>
      <img src={srcImage} alt="bg homepage" />
  </Background>
)