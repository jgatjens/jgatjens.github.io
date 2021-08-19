import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import leftImage from "../assets/header-left.png";
import rightImage from "../assets/header-right.png";
import imageIcon from "../assets/icon-jgatjens.png";

const PromoResumePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #202255;
  min-height: 396px;
  position: relative;
  color: white;

  .bg-left,
  .bg-right {
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: bottom;
    position: absolute;
    height: 100%;
    width: 260px;
    top: 0;
    z-index: 0;
  }

  H1 {
    margin-bottom: 50px;
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

  svg,
  a,
  h1,
  div {
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  line-height: 1;
  max-width: 266px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  text-transform: capitalize;

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const IconImage = styled.img`
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  bottom: 0;

  @media (max-width: 480px) {
    padding-bottom: 25px;
  }
`;

interface Props {
  locale: string;
}

const PromoResume: React.FC<Props> = ({ locale }) => (
  <PromoResumePage>
    <div className="bg-left"></div>
    <div className="bg-right"></div>

    <Link to={locale !== "en" ? `/${locale}` : "/"}>
      <svg width="25" height="14">
        <g stroke="#FFF" strokeWidth="2" fill="currentColor">
          <path d="M23.02 7H2" strokeLinecap="square" />
          <path d="M5.5 12.5l-4-5.377 4-5.623" />
        </g>
      </svg>
    </Link>
    <Title>Jairo Gatjens</Title>

    <IconImage src={imageIcon} alt="icon" />
  </PromoResumePage>
);

export default PromoResume;
