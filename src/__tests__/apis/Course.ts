// eslint-disable-next-line import/order
import dotenv from 'dotenv';

dotenv.config();

import { getCourses } from 'src/apis/Course';

describe('Getting all the courses', () => {
  test('Should return an object', async () => {
    const data = await getCourses();
    expect(typeof data).toBe('object');
  });

  test('Should have property `juniorCourses`', async () => {
    const data = await getCourses();
    expect(data).toHaveProperty('juniorCourses');
  });

  test('Should have property `youthCourses`', async () => {
    const data = await getCourses();
    expect(data).toHaveProperty('youthCourses');
  });

  test('Should have property `everyoneCourses`', async () => {
    const data = await getCourses();
    expect(data).toHaveProperty('everyoneCourses');
  });

  test('Should have property `igcseCourses`', async () => {
    const data = await getCourses();
    expect(data).toHaveProperty('igcseCourses');
  });
});
