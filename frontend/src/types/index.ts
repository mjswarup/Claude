export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  role: 'candidate' | 'employer';
}

export interface ResumeDraft {
  id: string;
  title: string;
  summary: string;
  experiences: Array<{ title: string; company: string; years: string; details: string }>;
}
