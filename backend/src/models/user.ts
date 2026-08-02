export interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  role: 'candidate' | 'employer' | 'admin';
  createdAt: string;
  updatedAt: string;
}
