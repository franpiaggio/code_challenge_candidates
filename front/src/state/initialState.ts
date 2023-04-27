export type User = {
  id: string;
  name: string;
  document: number;
  cv_zonajobs?: string;
  cv_bumeran?: string;
  phone?: string;
  email: string;
  date: Date;
  age?: number;
  has_university?: string;
  career?: string;
  graduated?: string;
  courses_approved?: string;
  location?: string;
  accepts_working_hours?: string;
  desired_salary?: string;
  had_interview?: string;
  reason?: string;
};

export type Columns = {
  id: boolean;
  name: boolean;
  document: boolean;
  cv_zonajobs: boolean;
  cv_bumeran: boolean;
  phone: boolean;
  email: boolean;
  date: boolean;
  age: boolean;
  has_university: boolean;
  career: boolean;
  graduated: boolean;
  courses_approved: boolean;
  location: boolean;
  accepts_working_hours: boolean;
  desired_salary: boolean;
  had_interview: boolean;
  reason: boolean;
  [key: string]: any;
};

export interface UserState {
  candidates: User[];
  columns: Columns | null;
}

export const initialState: UserState = {
  candidates: [],
  columns: null,
};
