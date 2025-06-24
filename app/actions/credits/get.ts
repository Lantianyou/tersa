'use server';

export const getCredits = async (): Promise<
  | {
    credits: number;
  }
  | {
    error: string;
  }
  > => {
  return {
    credits: 50 * 100,
  }
}
