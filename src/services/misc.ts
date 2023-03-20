import client from './Setup';

type MembersCount = {
  name: string;
  value: number;
};

// eslint-disable-next-line import/prefer-default-export
export const getMembersCount = async () => {
  const { fields } = await client.getEntry<MembersCount>('6wDI0CAaFAXWiESwED8F4A');

  return fields.value;
};
