import * as argon2 from 'argon2';
export const passwordHash = async (password: string) => {
  return await await argon2.hash(password);
};

export const passwordCompare = async (hash: string, password: string) => {
  return await argon2.verify(hash, password);
};
