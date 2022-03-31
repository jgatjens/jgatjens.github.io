import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { useRouteData } from "react-static";
// components
import ShareLinks from "components/ShareLinks";
import PromoResume from "components/PromoResume";
import Seo from "components/Seo";
import { IResume, IWorkHistory } from "types";

const ResumePage = styled.div`
  display: block;
  height: 100%;

  .container {
    max-width: 640px;
    margin: 0 auto;
    padding-top: 45px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 45px;
    color: #3b3e48;
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
    margin-top: 30px;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  ul {
    font-size: 14px;
    line-height: 22px;
    list-style: disc;
    padding-left: 18px;

    @media (min-width: 640px) {
      margin-left: 20px;
    }
  }

  div[class*="ShareLinks"] {
    margin-top: 30px;
    margin-bottom: 40px;
    text-align: left;
  }

  /* override styles when printing */
  @media print {
    .promo-header,
    .promo-header * {
      -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
      color-adjust: exact !important; /*Firefox*/
    }
  }
`;

const Desc = styled.p`
  color: #3b3e48;
  font-size: 16px;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 25px;

  a {
    color: #ff2f4a;
  }
`;

const HistoryTitle = styled.div`
  a {
    color: #ff2f4a;
    font-weight: bold;
    padding-right: 5px;
  }

  h4 {
    display: inline-block;
    font-weight: normal;
    margin-bottom: 0;
    font-style: italic;
  }
`;

const MenuLocale = styled.nav`
  position: absolute;
  top: 20px;
  left: 50%;
  color: #020218;
  display: flex;
  align-items: center;
  z-index: 100;
  margin-left: -25px;

  svg {
    width: 20px;
    heigth: 20px;
    fill: white;
  }

  a {
    color: white;
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

  @media print {
    margin-left: -10px;
    a {
      display: none;
    }
  }
`;

const ButtonDownload = styled.a`
  height: 50px;
  width: 190px;
  border-radius: 4px;
  background-color: #212356;
  border-color: #606292;
  color: white;
  padding: 0;
  text-transform: uppercase;
  border-width: 2px;
  border-style: solid;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1.5px;
  margin-top: 30px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }

  &:hover svg.svg-anime {
    stroke-dashoffset: -480;
  }

  .svg-donwload {
    width: 30px;
    margin-right: 10px;
  }

  svg.svg-anime {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }

  @media print {
    display: none;
  }

  @media (max-width: 640px) {
    bottom: 0;
    right: 0;
  }
`;

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => (
  <ul>
    {items.map((str: string, i: number) => {
      if (str.length === 0) {
        return;
      }
      return <li key={i}>{str}</li>;
    })}
  </ul>
);

const HistoryItem: React.FC<IWorkHistory> = ({
  company,
  company_url,
  job_name,
  date,
  skills,
}) => (
  <>
    <HistoryTitle>
      <a href={company_url} target="_blank">
        {company}
      </a>
      <h4>— {job_name}</h4>
      <p>{date}</p>
    </HistoryTitle>
    <List items={skills.split("-")}></List>
  </>
);

const Resume = () => {
  const res = useRouteData();
  const data: IResume = res.data;
  const downloadLink = `/static/jgatjens-resume-${data.locale}.pdf`;

  return (
    <ResumePage>
      <Seo data={data.seo}></Seo>

      <MenuLocale>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm181.248 124.896c-27.584 10.944-55.936 19.616-85.024 25.312A361.934 361.934 0 00293.312 35.36c59.008 9.984 110.144 42.976 143.936 89.536zm-108.8 200.864a533.523 533.523 0 00-144.928 0 332.338 332.338 0 01-.064-139.296c23.872 3.264 48 5.536 72.544 5.536s48.64-2.272 72.512-5.536a332.338 332.338 0 01-.064 139.296zm-8.288-170.592a500.92 500.92 0 01-128.352 0c13.12-41.152 34.56-80.16 64.192-114.72 29.632 34.56 51.04 73.568 64.16 114.72zM218.624 35.36c-26.944 35.232-46.528 74.176-58.88 114.848-29.056-5.696-57.408-14.368-84.992-25.312 33.76-46.56 84.896-79.552 143.872-89.536zM32 256c0-37.312 9.312-72.448 25.504-103.424 30.592 12.576 61.984 22.464 94.272 28.96a364.405 364.405 0 00.032 149.184c-32.256 6.432-63.776 16.256-94.304 28.8C41.312 328.48 32 293.344 32 256zm42.752 131.104c27.584-10.944 55.936-19.616 84.992-25.312a361.934 361.934 0 0058.912 114.848c-59.008-9.984-110.144-42.976-143.904-89.536zm117.088-30.272a500.672 500.672 0 01128.32 0c-13.12 41.152-34.56 80.16-64.16 114.72-29.632-34.56-51.04-73.568-64.16-114.72zM293.312 476.64a361.934 361.934 0 0058.912-114.848c29.056 5.696 57.44 14.4 85.024 25.312-33.792 46.56-84.928 79.552-143.936 89.536zm66.848-145.984c10.304-49.184 10.336-99.968.032-149.152 32.288-6.496 63.712-16.352 94.304-28.96C470.688 183.552 480 218.688 480 256c0 37.344-9.312 72.48-25.504 103.456-30.528-12.512-62.048-22.336-94.336-28.8z" />
        </svg>
        {data.locale != "en" ? <Link to="/resume">en</Link> : null}
        {data.locale != "es" ? <Link to="/es/resume">es</Link> : null}
      </MenuLocale>

      <PromoResume locale={data.locale} />

      <div className="container">
        <Desc>
          {data.location || "Santa Teresa, Costa Rica"} <br />
          <b>{data.email_title || "Email"}:</b>{" "}
          <a href="mailto:{{data.email}}">{data.email}</a>
        </Desc>

        <h2>{data.summary_title || "SUMMARY"}</h2>

        <p>{data.summary}</p>

        <ButtonDownload download href={downloadLink}>
          <svg
            width="190px"
            height="50px"
            viewBox="0 0 190 50"
            className="svg-anime"
          >
            <polyline
              points="189,1 189,49 1,49 1,1 189,1"
              className="bg-line"
            />
            <polyline
              points="189,1 189,49 1,49 1,1 189,1"
              className="hl-line"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-donwload"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>RESUME</span>
        </ButtonDownload>

        <h2>{data.skills_title || "SKILLS"}</h2>

        <List items={data.skills.split("-")}></List>

        <h2>{data.work_title || "WORK HISTORY"}</h2>

        {data.work_history.map((work, i: number) => (
          <HistoryItem key={i} {...work} />
        ))}

        <h2>{data.academic_title}</h2>

        <HistoryTitle>
          <a href="https://ufidelitas.ac.cr/" target="_blank">
            Universidad Fidelitas, Costa Rica
          </a>
          <h4>— Bachelor’s in Computer Science</h4>
          <p>2005 - 2008</p>
        </HistoryTitle>

        <HistoryTitle>
          <a href="https://ulatina.ac.cr/" target="_blank">
            Universidad Latina, Costa Rica
          </a>
          <h4>— Electrical and Electronics Engineering</h4>
          <p>2011 - 2012</p>
        </HistoryTitle>

        <ShareLinks />
      </div>
    </ResumePage>
  );
};

export default Resume;
