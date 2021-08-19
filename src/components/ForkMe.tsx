import React from 'react'
import styled from 'styled-components'
import img from '../assets/forkme.svg'

const ForkMe = styled.a` 
  position: absolute; top: 0; right: 0; border: 0;
`

export default () => (
    <ForkMe href="https://github.com/jgatjens/jgatjens.github.io/tree/develop">
        <img src={img} alt="Fork me on GitHub" />
    </ForkMe>
)

