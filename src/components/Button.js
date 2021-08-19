import styled, { css } from 'styled-components'

export const Button = styled.a`
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
  padding: 7px 18px;
  border: 1px solid #CDCFD4;
  margin: 0 2px 10px;
  font-weight: 200;
  color: #777777;
  text-decoration: none;
  text-transform: uppercase;

  ${props => props.active && css`
    background-color: #3B3E49;
    border-color: #3B3E49;
    color: white;
  `}
`
