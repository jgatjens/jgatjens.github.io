export interface Post {
  body: string;
  id: number;
  title: string;
}

export interface ISeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeyboards: string;
  metaImage: any;
}

export interface IHireMe {
  id: number;
  external: boolean;
  image: any | null;
  text: string;
  url: string;
}

export interface IProfile {
  id: number;
  title: string;
  location: string;
  image: any | null;
}

export interface IWorkHistory {
  company: string;
  company_url: string;
  job_name: string;
  date: string;
  skills: string;
}

export interface IResume {
  title: string;
  location: string;
  email: string;
  email_title: string;
  summary: string;
  skills_title: string;
  skills: string;
  work_title: string;
  summary_title: string;
  locale: string;
  work_history: IWorkHistory[];
  seo: ISeo;
  academic_title: string;
}
