import React from "react";
import styled from "styled-components";
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

  console.log(data.locale);

  return (
    <ResumePage>
      <Seo data={data.seo}></Seo>
      <PromoResume locale={data.locale} />
      <div className="container">
        <Desc>
          {data.location || "Santa Teresa, Costa Rica"} <br />
          <b>{data.email_title || "Email"}:</b>{" "}
          <a href="mailto:{{data.email}}">{data.email}</a>
        </Desc>

        <h2>{data.summary_title || "SUMMARY"}</h2>

        <p>{data.summary}</p>

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
