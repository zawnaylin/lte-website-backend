// eslint-disable-next-line import/order
import dotenv from 'dotenv';

dotenv.config();

import { getAllCounts } from '../../apis/Counts';

describe('Getting all the counts', () => {
  test('Should return an object', async () => {
    const data = await getAllCounts();
    expect(typeof data).toBe('object');
  });

  test('Should have the property `coursesCount`', async () => {
    const data = await getAllCounts();
    expect(data).toHaveProperty('coursesCount');
  });

  test('Should have the property `studentsCount`', async () => {
    const data = await getAllCounts();
    expect(data).toHaveProperty('studentsCount');
  });

  test('Should have the property `membersCount`', async () => {
    const data = await getAllCounts();
    expect(data).toHaveProperty('membersCount');
  });
});
