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
  overview: string;
  date: string;
  slug: string;
  color: string;
  media: {
    url: string;
  };
  tech_stack: string;
  my_role?: string;
  key_points?: string;
  url: string;
  url_next_work: string;
  url_prev_work: string;
  // translation
  t_button_label: string;
  t_tech_title: string;
  t_overview: string;
  t_my_role: string;
  t_key_points: string;
  lang: string;
};
