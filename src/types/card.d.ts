declare namespace Card {
  interface CardDetail {
    id: string;
    title: string;
    description: string;
    cover?: string;
    author: string;
    avatar?: string;
    reward: number;
    status: number;
    expire?: Date;
  }

  interface CardCreate {
    title: string;
    reward: number;
    description: string;
    expire?: Date;
  }

  interface Applicant {
    id: string;
    author: string;
    avatar?: string;
  }

  interface ApplyResult {
    contactInfo: string;
  }
}
