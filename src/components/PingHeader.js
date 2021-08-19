
import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import leftImage from '../assets/header-left.png'
import rightImage from '../assets/header-right.png'

const PingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #202255;
  min-height: 396px;
  position: relative;
  color: white;

  .bg-left, .bg-right {
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: bottom;
    position: absolute;
    height: 100%;
    width: 260px;
    top: 0;
    z-index: 0;
  }

  .bg-left {
    background-image: url(${leftImage});
    background-position-x: left;
    left: 0;
  }
  
  .bg-right {
    background-image: url(${rightImage});
    background-position-x: right;
    right: 0;
  }
  
  svg, a, h1, div {
    z-index: 1;
  }
`

const Title = styled.h1`
  font-size: 40px;
  line-height: 1;
  max-width: 266px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  text-transform: capitalize;

  @media (max-width: 480px) {
    font-size: 25px;
  }
`

export default () => (
  <PingHeader>
    <div className="bg-left" />
    <div className="bg-right" />

    <Link exact to="/">
      <svg width="25" height="14">
        <g stroke="#FFF" strokeWidth="2" fill="currentColor"><path d="M23.02 7H2" strokeLinecap="square" />
          <path d="M5.5 12.5l-4-5.377 4-5.623" />
        </g>
      </svg>
    </Link>

    <Title>Merecemos un mejor PING</Title>
    <svg width="75" height="43">
      <path d="M46.713 0l-1.038 3.14.026 14.495h3.866v1.932h2.077l2.076-1.932h3.633l6.747-6.281V0H46.713zm15.57 10.388l-2.854 2.657h-4.671l-2.595 2.416v-2.416H48.27V1.69h14.014v8.697zm-4.67-5.557h1.816v4.832h-1.817V4.83zm-4.672 0h1.817v4.832H52.94V4.83zM75 27.298v11.354L68.253 43H64.1v-1.933L60.986 43h-3.633v-1.933L55.017 43H48.27l-2.076-1.933-.52 1.933-5.942-.024-2.362-1.909L37.11 43l-6.747-.024-.26-1.909-1.816 1.909-10.38.024-2.077-.966V43h-5.709l-6.228-3.624L0 35.753V19.809h8.045l3.893 3.624h17.647v-3.624h14.533v3.624h3.633v1.932l2.076-1.932h4.412l3.892-3.624h8.305v3.624h4.412L75 27.298zm-64.879-2.174H6.488V21.5H1.817v13.528l2.854 2.899h5.45v-4.59H6.488v-3.865h3.633v-4.348zm19.464 0h-4.672v8.213h-1.816v-8.213h-4.412v8.213H16.87v-8.213h-4.931v12.803H26.47l3.114-2.899v-9.904zm6.228 0h-4.412v12.803h4.412V25.124zm0-3.624h-4.412v1.933h4.412V21.5zm10.121 3.624h-3.633V21.5H37.63v13.528l2.854 2.899h5.45v-4.59h-3.633v-3.865h3.633v-4.348zm11.938 0h-7.266L47.75 27.78v7.247l3.114 2.899h7.007v-4.59h-5.19v-3.865h5.19v-4.348zm15.311 2.657l-3.114-2.657h-5.45V21.5h-4.93v16.427h4.93v-8.455h3.634v8.455h4.93V27.781z" fill="#FFF" />
    </svg>

  </PingHeader>
)
