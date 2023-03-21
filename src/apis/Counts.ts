import { getCoursesCount, getStudentCounts } from '../services/Course';
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
