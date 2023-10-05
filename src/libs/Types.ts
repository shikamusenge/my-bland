import { ReactNode } from "react";
type link = { url: string; projectName: string };
export type projectProps = {
  image: string;
  projectName: string;
  Techinology: [];
  links: link[];
};

export type BigCardProp = {
  children: [ReactNode, ReactNode];
};

export type Temail = {
  email: string;
  names: string;
  phone: string;
  message: string;
};
