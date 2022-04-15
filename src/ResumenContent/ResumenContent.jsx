import React from "react";
import { ButtonDownload } from "../ButtonDownload/ButtonDownload";

const List = ({ items }) => (
  <ul className="list-disc list-inside mb-8 pl-4">
    {items.map((str, i) => {
      if (str.length === 0) {
        return;
      }
      return (
        <li className="text-bodysmall" key={i}>
          {str}
        </li>
      );
    })}
  </ul>
);

const HistoryItem = ({ company, company_url, job_name, date, skills }) => (
  <div className="mb-8">
    <div>
      <a
        className="text-red underline inline font-semibold"
        href={company_url}
        target="_blank"
      >
        {company}
      </a>
      <h4 className="italic inline-block font-normal mb-1">— {job_name}</h4>
      <p className="text-bodysmall mb-3">{date}</p>
    </div>
    <List items={skills.split("-")}></List>
  </div>
);

/**
 * Primary UI component for user interaction
 */
export const ResumenContent = ({
  location,
  email,
  resume_button_label,
  summary,
  email_title,
  summary_title,
  work_title,
  skills_title,
  academic_title,
  skills,
  work_history,
}) => (
  <div className="container text-[#3b3e48] pb-10">
    <p className="text-bodysmall mb-6">
      {location || "Santa Teresa, Costa Rica"} <br />
      <b>{email_title || "Email"}:</b>{" "}
      <a className="text-red" href="mailto:{{email}}">
        {email}
      </a>
    </p>
    <h2 className="text-h2 mb-4">{summary_title}</h2>
    <p className="mb-7 text-bodysmall">{summary}</p>

    <ButtonDownload label={resume_button_label || "RESUME"} />

    <h2 className="text-h2 mb-4 print:">{skills_title || "SKILLS"}</h2>

    <List items={skills.split("-")}></List>

    <h2 className="text-h2 mb-5 print:mt-28">{work_title || "WORK HISTORY"}</h2>

    {work_history.map((work, i) => (
      <HistoryItem key={i} {...work} />
    ))}

    <h2 className="text-h2 mb-5">{academic_title}</h2>

    <div>
      <a
        className="text-red underline inline font-semibold"
        href="https://ufidelitas.ac.cr/"
        target="_blank"
      >
        Universidad Fidelitas, Costa Rica
      </a>
      <h4 className="italic inline-block font-normal mb-1">
        — Bachelor’s in Computer Science
      </h4>
      <p className="text-bodysmall mb-3">2005 - 2008</p>
    </div>

    <div>
      <a
        className="text-red underline inline font-semibold"
        href="https://ulatina.ac.cr/"
        target="_blank"
      >
        Universidad Latina, Costa Rica
      </a>
      <h4 className="italic inline-block font-normal mb-1">
        — Electrical and Electronics Engineering
      </h4>
      <p className="text-bodysmall mb-3">2011 - 2012</p>
    </div>
  </div>
);
