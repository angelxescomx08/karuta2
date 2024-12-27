export const sleep = async (milliseconds: number): Promise<number> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, milliseconds);
  });
};
