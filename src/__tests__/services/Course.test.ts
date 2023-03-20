// eslint-disable-next-line import/order
import dotenv from 'dotenv-safe';

dotenv.config();

// eslint-disable-next-line import/first
import * as course from '@src/services/Course';

describe('Course related tests', () => {
  describe('getStudentsCount Test', () => {
    test('Should return a number', async () => {
      const data = await course.getStudentCounts();
      expect(typeof data).toBe('number');
    });

    test('Should be greater than or equal to 0', async () => {
      const data = await course.getStudentCounts();
      expect(data).toBeGreaterThanOrEqual(0);
    });
  });
  // ----------------------------------------------------------- //
  describe('getCoursesCount Test', () => {
    test('Should return a number', async () => {
      const data = await course.getCoursesCount();
      expect(typeof data).toBe('number');
    });

    test('Should be greater than or equal to 0', async () => {
      const data = await course.getCoursesCount();
      expect(data).toBeGreaterThanOrEqual(0);
    });
  });
  // ----------------------------------------------------------- //
  describe('getJuniorCourse tests', () => {
    describe('for home page', () => {
      const isHomePage = true;
      test('Should return an array', async () => {
        const data = await course.getJuniorCourses(isHomePage);
        expect(Array.isArray(data)).toBe(true);
      });

      test('Should have at least one element', async () => {
        const data = await course.getJuniorCourses(isHomePage);
        expect(data.length).toBeGreaterThan(0);
      });

      test('Should have string element', async () => {
        const data = await course.getJuniorCourses(isHomePage);
        expect(typeof data[0]).toBe('string');
      });
    });

    describe('for detail page', () => { });
  });
  // ----------------------------------------------------------- //
  describe('getYouthCourse tests', () => {
    describe('for home page', () => {
      const isHomePage = true;
      test('Should return an array', async () => {
        const data = await course.getYouthCourses(isHomePage);
        expect(Array.isArray(data)).toBe(true);
      });

      test('Should have at least one element', async () => {
        const data = await course.getYouthCourses(isHomePage);
        expect(data.length).toBeGreaterThan(0);
      });

      test('Should have string element', async () => {
        const data = await course.getYouthCourses(isHomePage);
        expect(typeof data[0]).toBe('string');
      });
    });

    describe('for detail page', () => { });
  });

  // ----------------------------------------------------------- //
  describe('getEveryoneCourse tests', () => {
    describe('for home page', () => {
      const isHomePage = true;
      test('Should return an array', async () => {
        const data = await course.getEveryoneCourses(isHomePage);
        expect(Array.isArray(data)).toBe(true);
      });

      test('Should have at least one element', async () => {
        const data = await course.getEveryoneCourses(isHomePage);
        expect(data.length).toBeGreaterThan(0);
      });

      test('Should have string element', async () => {
        const data = await course.getEveryoneCourses(isHomePage);
        expect(typeof data[0]).toBe('string');
      });
    });

    describe('for detail page', () => { });

    // ----------------------------------------------------------- //
    describe('getIgcseCourse tests', () => {
      describe('for home page', () => {
        const isHomePage = true;
        test('Should return an array', async () => {
          const data = await course.getIgcseCourses(isHomePage);
          expect(Array.isArray(data)).toBe(true);
        });

        test('Should have at least one element', async () => {
          const data = await course.getIgcseCourses(isHomePage);
          expect(data.length).toBeGreaterThan(0);
        });

        test('Should have string element', async () => {
          const data = await course.getIgcseCourses(isHomePage);
          expect(typeof data[0]).toBe('string');
        });
      });

      describe('for detail page', () => { });
    });
  });
});
