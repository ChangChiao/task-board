declare namespace Task {
  interface TaskDetail {
    id: string;
    title: string;
    description: string;
    cover?: string;
    author: string;
    avatar?: string;
    city: string;
    reward: number;
    status: number;
    expire?: Date;
  }

  interface TaskAPIResponse extends Api.ApiResponse {
    data: TaskDetail[];
  }

  interface TaskCreate {
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
