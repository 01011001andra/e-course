export interface Root {
  id: string;
  slug: string;
  title: string;
  price: number;
  discount: number;
  description: string;
  video_overview: string;
  tags: string[];
  lecture_type: string;
  level: string;
  duration: number;
  instructor: Instructor;
  stages: Stages[];
}

export interface Instructor {
  name: string;
  picture: string;
  position: string;
  company: string;
  courses: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export interface Stages {
  id: string;
  title: string;
  slug: string;
  progress: number;
  details: Detail[];
}

export interface Detail {
  id: string;
  title: string;
  slug: string;
  is_watched: boolean;
  is_playing: boolean;
  is_locked: boolean;
  duration: number;
  video: string;
  comments: Comment[];
  files: File[];
}

export interface Comment {
  id: string;
  name: string;
  text: string;
  likes: number;
  replies: number;
  detail_replies?: DetailReply[];
  createdAt: string;
}

export interface DetailReply {
  id: string;
  name: string;
  text: string;
  likes: number;
  createdAt: string;
}

export interface File {
  title: string;
  url: string;
  type: "pdf" | "ppt";
}
