import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const SkillList = styled.div`
  padding-top: 10px;
  text-align: center;
`

export default () => (
  <SkillList>
    <Button href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/" target="_blank">Javascript</Button>
    <Button href="https://nodejs.org/" target="_blank">Nodejs</Button>
    <Button href="https://facebook.github.io/react-native/" target="_blank">Mobile</Button>
    <Button active href="https://www.linkedin.com/in/jgatjens?trk=hp-identity-photo#background-skills-container" target="_blank">+10</Button>
  </SkillList>
)
