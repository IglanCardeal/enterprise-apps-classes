import { z } from 'zod';

export const makeSafeZodFetch = async <T>(
  url: string,
  schema: z.Schema<T>,
): Promise<T> => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => schema.parse(data) as T);
};

(async () => {
  const res = await makeSafeZodFetch(
    'any_url',
    z.object({ id: z.number().optional(), name: z.string() }),
  );
  console.log(res);
})();
