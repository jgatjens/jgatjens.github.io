import React from "react";
import { ButtonDownload } from "@/components/button-download/button-download";

interface ItemsProps {
  items: string[];
}

const List = ({ items }: ItemsProps) => (
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

interface HistoryItemProps {
  company: string;
  company_url: string;
  job_name: string;
  date: string;
  skills: string;
}

const HistoryItem = ({ company, company_url, job_name, date, skills }: HistoryItemProps) => (
  <div className="mb-8">
    <div>
      <a className="text-red underline inline font-semibold" href={company_url} target="_blank">
        {company}
      </a>
      <h4 className="italic inline-block font-normal mb-1">— {job_name}</h4>
      <p className="text-bodysmall mb-3">{date}</p>
    </div>
    {skills && <List items={skills.split("-")}></List>}
  </div>
);

interface ResumenContentProps {
  location: string;
  email: string;
  resume_button_label: string;
  summary: string;
  email_label: string;
  summary_label: string;
  work_label: string;
  skill_label: string;
  academic_label: string;
  skills: string;
  pdf_link: string;
  history: {
    company: string;
    company_url: string;
    job_name: string;
    date: string;
    skills: string;
  }[];
}

export const ResumenContent = ({
  location,
  email,
  resume_button_label,
  summary,
  email_label,
  summary_label,
  work_label,
  skill_label,
  academic_label,
  skills,
  pdf_link,
  history,
}: ResumenContentProps) => (
  <div className="container text-[#3b3e48] pb-10">
    <p className="text-bodysmall mb-6">
      {location || "Santa Teresa, Costa Rica"} <br />
      <b>{email_label || "Email"}:</b>{" "}
      <a className="text-red" href="mailto:{{email}}">
        {email}
      </a>
    </p>
    <h2 className="text-h2 mb-4 uppercase">{summary_label}</h2>
    <p className="mb-7 text-bodysmall">{summary}</p>

    <ButtonDownload link={pdf_link} label={resume_button_label || "RESUME"} />

    <h2 className="text-h2 mb-4 uppercase">{skill_label || "SKILLS"}</h2>

    {skills && <List items={skills?.split("-")}></List>}

    <h2 className="text-h2 mb-5 print:mt-28 uppercase">{work_label || "WORK HISTORY"}</h2>

    {history?.map((work, i) => (
      <HistoryItem key={i} {...work} />
    ))}

    <h2 className="text-h2 mb-5 uppercase">{academic_label}</h2>

    <div>
      <a
        className="text-red underline inline font-semibold"
        href="https://ufidelitas.ac.cr/"
        target="_blank"
      >
        Universidad Fidelitas, Costa Rica
      </a>
      <h4 className="italic inline-block font-normal mb-1">— Bachelor’s in Computer Science</h4>
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
