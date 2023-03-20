import {
  getCoursesCount,
  getStudentCounts,
  getJuniorCourses,
  getYouthCourses,
  getEveryoneCourses,
  getIgcseCourses,
} from '@src/services/Course';
import { getMembersCount } from '../services/misc';

export const getAllCounts = async () => {
  const coursesCount = await getCoursesCount();
  const studentsCount = await getStudentCounts();
  const membersCount = await getMembersCount();

  return {
    coursesCount,
    studentsCount,
    membersCount,
  };
};

export const getCourses = async () => {
  const isHomePage = true;
  const juniorCourses = await getJuniorCourses(isHomePage);
  const youthCourses = await getYouthCourses(isHomePage);
  const everyoneCourses = await getEveryoneCourses(isHomePage);
  const igcseCourses = await getIgcseCourses(isHomePage);

  return {
    juniorCourses,
    youthCourses,
    everyoneCourses,
    igcseCourses,
  };
};
