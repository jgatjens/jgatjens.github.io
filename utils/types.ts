export type BackendProps = {
  data: {
    attributes: {
      [key: string]: any;
      open_graph?: {
        [key: string]: any;
      };
    };
  };
};

export type getDataProps = {
  name: string;
  populate: string;
};

export type WorkItemProps = {
  headline: string;
  description: string;
  date: string;
  slug: string;
  color: String;
  media: {
    url: string;
  };
  tech_stack: string;
  url: string;
  url_next_work: string;
  url_prev_work: string;
  // translation
  t_button_label: string;
  t_tech_title: string;
  lang: string;
};
