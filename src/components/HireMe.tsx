import React from "react";
import styled from "styled-components";

import { IHireMe } from "../../types";

interface HireMeProps {
  data: IHireMe;
}

const Link = styled.a`
  height: 48px;
  width: 240px;
  border-radius: 6px;
  line-height: 48px;
  border-color: #020218;
  color: #020218;
  padding: 0;
  background-color: white;
  text-transform: uppercase;
  border-width: 2px;
  border-style: solid;
  font-weight: 600;
  font-size: 17px;
  margin-top: 30px;
  display: block;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: #ff2f4a;
    border-color: #ffcbd1;
  }
`;

const HireMe: React.FC<HireMeProps> = ({ data }) => (
  <Link href={data.url}>{data.text}</Link>
);

export default HireMe;
