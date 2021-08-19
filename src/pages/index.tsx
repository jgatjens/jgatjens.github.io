import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import styled from "styled-components";

// components
import Profile from "../components/Profile";
import Seo from "../components/Seo";
import ShareLinks from "../components/ShareLinks";
import HireMe from "../components/HireMe";
import Background from "../components/Background";
const Desc = styled.p`
  margin: 0;
  padding: 30px 0 0 0;
  line-height: 22px;
  font-weight: 200;
  color: #020218;
  font-size: 13px;
  text-align: center;
`;

const HomePage = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Menu = styled.nav`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #020218;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(10px);
    }
    40% {
      transform: translateX(35px);
    }
    60% {
      transform: translateX(20px);
    }
  }

  div {
    display: inline-block;
    transform: rotateY(180deg);
  }

  svg {
    position: relative;
    top: 1px;
    margin-right: 10px;
    animation: bounce 2s infinite;
  }

  a {
    color: #020218;
    text-transform: uppercase;
    text-decoration: none;
    ont-weight: 600;
    font-size: 17px;
    &:hover {
      color: #ff2f4a;
      text-decoration: underline;
    }
  }
`;

const MenuLocale = styled.nav`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #020218;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    heigth: 20px;
  }

  a {
    color: #020218;
    margin-left: 10px;
    text-transform: uppercase;
    text-decoration: none;
    ont-weight: 600;
    font-size: 17px;
    &:hover {
      color: #ff2f4a;
      text-decoration: underline;
    }
  }
`;

export default () => {
  const { data } = useRouteData();
  const locale = data.locale;
  return (
    <HomePage>
      <Seo data={data.Seo}></Seo>
      <MenuLocale>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm181.248 124.896c-27.584 10.944-55.936 19.616-85.024 25.312A361.934 361.934 0 00293.312 35.36c59.008 9.984 110.144 42.976 143.936 89.536zm-108.8 200.864a533.523 533.523 0 00-144.928 0 332.338 332.338 0 01-.064-139.296c23.872 3.264 48 5.536 72.544 5.536s48.64-2.272 72.512-5.536a332.338 332.338 0 01-.064 139.296zm-8.288-170.592a500.92 500.92 0 01-128.352 0c13.12-41.152 34.56-80.16 64.192-114.72 29.632 34.56 51.04 73.568 64.16 114.72zM218.624 35.36c-26.944 35.232-46.528 74.176-58.88 114.848-29.056-5.696-57.408-14.368-84.992-25.312 33.76-46.56 84.896-79.552 143.872-89.536zM32 256c0-37.312 9.312-72.448 25.504-103.424 30.592 12.576 61.984 22.464 94.272 28.96a364.405 364.405 0 00.032 149.184c-32.256 6.432-63.776 16.256-94.304 28.8C41.312 328.48 32 293.344 32 256zm42.752 131.104c27.584-10.944 55.936-19.616 84.992-25.312a361.934 361.934 0 0058.912 114.848c-59.008-9.984-110.144-42.976-143.904-89.536zm117.088-30.272a500.672 500.672 0 01128.32 0c-13.12 41.152-34.56 80.16-64.16 114.72-29.632-34.56-51.04-73.568-64.16-114.72zM293.312 476.64a361.934 361.934 0 0058.912-114.848c29.056 5.696 57.44 14.4 85.024 25.312-33.792 46.56-84.928 79.552-143.936 89.536zm66.848-145.984c10.304-49.184 10.336-99.968.032-149.152 32.288-6.496 63.712-16.352 94.304-28.96C470.688 183.552 480 218.688 480 256c0 37.344-9.312 72.48-25.504 103.456-30.528-12.512-62.048-22.336-94.336-28.8z" />
        </svg>
        <Link to="/">en</Link>
        <Link to="/es">es</Link>
      </MenuLocale>
      <Menu>
        <div>
          <svg width="25" height="14">
            <g stroke="currentColor" strokeWidth="2" fill="currentColor">
              <path d="M23.02 7H2" strokeLinecap="square" />
              <path d="M5.5 12.5l-4-5.377 4-5.623" />
            </g>
          </svg>
        </div>
        <Link to={locale !== "en" ? `/${locale}/resume` : "/resume"}>
          {data.resume || "resume"}
        </Link>
      </Menu>

      <Background />
      <Profile data={data.profile} />
      <HireMe data={data.hire_me} />
      <Desc
        dangerouslySetInnerHTML={{ __html: data.profile.description }}
      ></Desc>
      <ShareLinks />
    </HomePage>
  );
};
