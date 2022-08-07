declare namespace Task {
  interface TaskDetail {
    _id: string;
    title: string;
    description: string;
    cover?: string;
    author: string;
    avatar?: string;
    city: string;
    reward: number;
    status: number;
    expire: string;
  }

  interface TaskAPIResponse<T> extends Api.ApiResponse {
    data?: T[];
  }

  interface TaskCreate {
    title: string;
    reward: number;
    description: string;
    expire: string;
  }

  interface Applicant {
    _id: string;
    name: string;
    avatar: string;
  }

  interface TaskWithApplicant extends TaskDetail {
    applicant: Task.Applicant[] | [];
  }

  interface ApplyResult {
    contactInfo: string;
  }
}
