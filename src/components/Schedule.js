import React from 'react'
import styled from 'styled-components'

const Schedule = styled.div`
  a {
    display: flex;    
    align-items: center;
    padding-bottom: 5px;
    text-decoration: none;
  }

  svg {
    position: relative;
    margin-left: 5px;
    left: 0px;
    transform: rotate(180deg) scale(0.7);
    transition: left 300ms ease-in-out 0s;
  }
`

export default () => (
  <Schedule>
      <a href="https://www.twitch.tv/popout/jgatjens/extensions/naty2zwfp7vecaivuve8ef1hohh6bo/panel" target="_blank">Horario
        <svg width="25" height="14">
          <g stroke="currentColor" strokeWidth="2" fill="transparent">
            <path d="M23.02 7H2" strokeLinecap="square">
            </path><path d="M5.5 12.5l-4-5.377 4-5.623"></path>
          </g>
        </svg>
      </a>
  </Schedule> 
)