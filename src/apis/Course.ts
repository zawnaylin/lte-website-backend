import { getJuniorCourses, getYouthCourses, getEveryoneCourses, getIgcseCourses } from '../services/Course';

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
