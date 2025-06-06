import { IconType } from "react-icons";

export type TChildren = Readonly<{
  children: React.ReactNode;
}>;

export type TParams = {
  params: Promise<{ id: string }>;
};

export type MetaProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
};

export type TServices = {
  id: number;
  photo: string;
  service_name: string;
  description: string;
  features_name: string;
  features: string[];
};

export interface IFoundingTeam {
  id: number;
  photo: string;
  name: string;
  position: string;
  about_shrl: string;
}

export interface ICommitments {
  id: number;
  title: string;
  icon: IconType;
  strengths: string[];
}

export interface MemberProps {
  member: {
    _id: string;
    name: string;
    designation: string;
    short_about: string;
    phone?: string;
    email?: string;
    photo: string;
  };
}

type SocialLink = {
  research_gate?: string;
  linkedin?: string;
  github?: string;
};

export type TeamMember = {
  name: string;
  designation: string;
  details_about?: string[];
  social?: SocialLink[];
  photo: string;
  heading_1?: string;
  work_1?: string[];
  heading_2?: string;
  work_2?: string[];
  heading_3?: string;
  wor_3?: string[];
};

export type TEvents = {
  _id: string;
  heading: string;
  facilitators: string;
  details: string;
  time: string;
  venue: string;
  photo: string;
  date: string;
  createdAt: string;
};
