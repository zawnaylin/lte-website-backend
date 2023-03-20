// eslint-disable-next-line import/order
import dotenv from 'dotenv-safe';

dotenv.config();

// eslint-disable-next-line import/first
import * as misc from '@src/services/misc';

describe('Miscellanous Tests', () => {
  describe('Member Counts Test', () => {
    test('Should return something', async () => {
      const data = await misc.getMembersCount();
      expect(data).toBeDefined();
    });

    test('Should return a number', async () => {
      const data = await misc.getMembersCount();
      expect(typeof data).toBe('number');
    });
    test('Should be greater than or equal to 0', async () => {
      const data = await misc.getMembersCount();
      expect(data).toBeGreaterThanOrEqual(0);
    });
  });
});
