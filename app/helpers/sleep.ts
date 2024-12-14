export const sleep = async (milliseconds: number): Promise<number> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, milliseconds);
  });
};
