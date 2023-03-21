import { BaseCourse, CourseDetail, ClassCategory } from '../types/Course';
import client from './Setup';

export const getStudentCounts = async () => {
  type StudentsCount = {
    students: number;
  };
  const { items } = await client.getEntries<StudentsCount>({
    content_type: 'course',
    select: 'fields.students',
  });

  const studentsCount = items.reduce((totalStudentsCount, item) => totalStudentsCount + item.fields.students, 0);

  return studentsCount;
};

export const getCoursesCount = async () => {
  const { total } = await client.getEntries({
    content_type: 'course',
  });

  return total;
};

const getCourses = async (isHomePage: boolean, category: ClassCategory) => {
  const { items } = await client.getEntries<BaseCourse | CourseDetail>({
    content_type: 'course',
    select: isHomePage ? 'fields.name' : 'fields.name,fields.students,fields.thumbnail',
    'fields.classCategory': category,
  });

  return items;
};

export const getJuniorCourses = async (isHomePage: boolean) => {
  const items = await getCourses(isHomePage, ClassCategory.Junior);

  return items.map((item) => item.fields.name);
};

export const getYouthCourses = async (isHomePage: boolean) => {
  const items = await getCourses(isHomePage, ClassCategory.Youth);

  return items.map((item) => item.fields.name);
};

export const getEveryoneCourses = async (isHomePage: boolean) => {
  const items = await getCourses(isHomePage, ClassCategory.Everyone);

  return items.map((item) => item.fields.name);
};

export const getIgcseCourses = async (isHomePage: boolean) => {
  const items = await getCourses(isHomePage, ClassCategory.IGCSE);

  return items.map((item) => item.fields.name);
};
