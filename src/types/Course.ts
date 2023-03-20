export enum ClassCategory {
  Junior = 'Junior',
  Youth = 'Youth',
  Everyone = 'Everyone',
  IGCSE = 'IGCSE',
}

export interface BaseCourse {
  name: string;
}

export interface CourseDetail extends BaseCourse {
  students: number;
}
