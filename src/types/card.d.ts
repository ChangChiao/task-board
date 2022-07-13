declare namespace Card {
  interface CardDetail {
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
}
