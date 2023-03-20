// eslint-disable-next-line import/order
import dotenv from 'dotenv-safe';

dotenv.config();

// eslint-disable-next-line import/first
import * as home from '@src/Pages/Home';

describe('Home Page Testing', () => {
  describe('Getting all the counts', () => {
    test('Should return an object', async () => {
      const data = await home.getAllCounts();
      expect(typeof data).toBe('object');
    });

    test('Should have the property `coursesCount`', async () => {
      const data = await home.getAllCounts();
      expect(data).toHaveProperty('coursesCount');
    });

    test('Should have the property `studentsCount`', async () => {
      const data = await home.getAllCounts();
      expect(data).toHaveProperty('studentsCount');
    });

    test('Should have the property `membersCount`', async () => {
      const data = await home.getAllCounts();
      expect(data).toHaveProperty('membersCount');
    });
  });

  describe('Getting all the courses', () => {
    test('Should return an object', async () => {
      const data = await home.getCourses();
      expect(typeof data).toBe('object');
    });

    test('Should have property `juniorCourses`', async () => {
      const data = await home.getCourses();
      expect(data).toHaveProperty('juniorCourses');
    });

    test('Should have property `youthCourses`', async () => {
      const data = await home.getCourses();
      expect(data).toHaveProperty('youthCourses');
    });

    test('Should have property `everyoneCourses`', async () => {
      const data = await home.getCourses();
      expect(data).toHaveProperty('everyoneCourses');
    });

    test('Should have property `igcseCourses`', async () => {
      const data = await home.getCourses();
      expect(data).toHaveProperty('igcseCourses');
    });
  });
});
